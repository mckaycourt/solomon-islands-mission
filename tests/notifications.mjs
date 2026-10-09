import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import crypto from 'node:crypto';

function fixture() {
  const hashes = new Map(), sets = new Map(), values = new Map();
  const content = [{ id: 'letters:old', kind: 'letters', title: 'Old', body: 'Hello', url: '/letters/old' }];
  const sends = []; let pushError;
  class Redis {
    async hget(key, field) { return hashes.get(key)?.[field] ?? null; }
    async hgetall(key) { return { ...hashes.get(key) }; }
    async hset(key, fields) { hashes.set(key, { ...hashes.get(key), ...fields }); }
    async hdel(key, field) { if (hashes.has(key)) delete hashes.get(key)[field]; }
    async sadd(key, ...items) { assert.ok(items.length, 'SADD must have members'); const set = sets.get(key) ?? new Set(); for (const i of items) set.add(i); sets.set(key, set); }
    async smembers(key) { return [...(sets.get(key) ?? [])]; }
    async set(key, value, options) { if (options?.nx && values.has(key)) return null; values.set(key, value); return 'OK'; }
    async del(key) { values.delete(key); sets.delete(key); }
    async eval(script, keys, args) { if (values.get(keys[0]) === args[0]) values.delete(keys[0]); }
    multi() { const calls = []; const tx = {}; for (const method of ['hset','hdel','del','sadd']) tx[method] = (...args) => { calls.push(() => this[method](...args)); return tx; }; tx.exec = async () => { for (const call of calls) await call(); }; return tx; }
  }
  const mockPush = { sendNotification: async (sub, payload) => { if (pushError) throw pushError; sends.push({ sub, payload: JSON.parse(payload) }); } };
  const compiled = ts.transpileModule(fs.readFileSync('lib/notifications.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const compiledModule = { exports: {} };
  new Function('require','module','exports',compiled)((name) => {
    if (name === 'node:crypto') return crypto;
    if (name === '@upstash/redis') return { Redis };
    if (name === 'web-push') return mockPush;
    if (name === './notification-content') return { notificationContent: content };
    throw new Error(name);
  },compiledModule,compiledModule.exports);
  const api = compiledModule.exports;
  const sub = { endpoint: 'https://web.push.apple.com/test-device', keys: { auth: Buffer.alloc(16,1).toString('base64url'), p256dh: Buffer.alloc(65,2).toString('base64url') } };
  return { api, sub, content, sends, fail: (statusCode) => { pushError = statusCode ? { statusCode } : undefined; } };
}
process.env.UPSTASH_REDIS_REST_URL = 'https://example.upstash.io';
process.env.UPSTASH_REDIS_REST_TOKEN = 'test';
process.env.VAPID_PUBLIC_KEY = 'test';
process.env.VAPID_PRIVATE_KEY = 'test';

test('accepts browser subscription and rejects SSRF endpoints and malformed keys', () => {
  const {api,sub} = fixture(); assert.deepEqual(api.parseSubscription(sub),sub);
  for(const endpoint of ['http://web.push.apple.com/device','https://localhost/','https://web.push.apple.com.evil.example/','https://user:pass@web.push.apple.com/device','https://web.push.apple.com:8443/device']) assert.throws(() => api.parseSubscription({...sub,endpoint}));
  assert.throws(() => api.parseSubscription({...sub,keys:{...sub.keys,auth:'short'}}));
});
test('starts from current archive, sends each new post once with the correct deep link', async () => {
  const {api,sub,content,sends} = fixture();
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:true});
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:true});
  assert.equal((await api.publishNotifications()).sent,0);
  content.unshift({id:'thoughts:new',kind:'thoughts',title:'New thought',body:'Day 46',url:'/scripture-thoughts/new'});
  assert.equal((await api.publishNotifications()).sent,1);
  assert.equal(sends[0].payload.url,'/scripture-thoughts/new');
  assert.equal((await api.publishNotifications()).sent,0);
});
test('honors category preferences and never backfills an opted-out category', async () => {
  const {api,sub,content,sends} = fixture();
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:false});
  content.unshift({id:'thoughts:new',kind:'thoughts',title:'New',body:'Day',url:'/scripture-thoughts/new'});
  await api.publishNotifications(); assert.equal(sends.length,0);
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:true});
  await api.publishNotifications(); assert.equal(sends.length,0);
});
test('retries transient failures and removes expired subscriptions', async () => {
  const {api,sub,content,fail} = fixture();
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:true});
  content.unshift({id:'letters:new',kind:'letters',title:'New',body:'Hello',url:'/letters/new'});
  fail(503); assert.equal((await api.publishNotifications()).failed,1);
  fail(); assert.equal((await api.publishNotifications()).sent,1);
  content.unshift({id:'letters:next',kind:'letters',title:'Next',body:'Hello',url:'/letters/next'});
  fail(410); await api.publishNotifications(); assert.equal(await api.ownedSubscriber(sub),null);
});
test('device management requires matching subscription keys and unsubscribe removes delivery history', async () => {
  const {api,sub} = fixture();
  await api.saveSubscriber({subscription:sub,letters:true,thoughts:true});
  assert.equal(await api.ownedSubscriber({...sub,keys:{...sub.keys,auth:Buffer.alloc(16,3).toString('base64url')}}),null);
  const owned = await api.ownedSubscriber(sub); assert.ok(owned);
  await api.removeSubscriber(owned.id); assert.equal(await api.ownedSubscriber(sub),null);
});
test('public mutation requests reject other origins before storage', async () => {
  const {api} = fixture();
  await assert.rejects(api.publicRequest(new Request('https://mission.example/api/notifications/test',{method:'POST',headers:{origin:'https://evil.example'},body:'{}'})), (e) => e.status === 403);
});
