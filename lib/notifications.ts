import { createHash, randomUUID, timingSafeEqual } from "node:crypto";
import { Redis } from "@upstash/redis";
import webpush from "web-push";
import { notificationContent } from "./notification-content";

export const SUBSCRIPTIONS = "push:subscriptions";
export type Subscriber = { subscription: webpush.PushSubscription; letters: boolean; thoughts: boolean };
export function redis() {
  const url = process.env.mission_KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.mission_KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("Notification storage is not configured");
  return new Redis({ url, token });
}
export function configured() {
  return Boolean((process.env.mission_KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL) &&
    (process.env.mission_KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN) &&
    process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
}
export function subscriberId(endpoint: string) { return createHash("sha256").update(endpoint).digest("hex"); }
export function sameSecret(left: string, right: string) {
  const a = Buffer.from(left); const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}
export function parseSubscription(input: unknown): webpush.PushSubscription {
  const sub = input as webpush.PushSubscription | undefined;
  if (!sub || typeof sub.endpoint !== "string" || sub.endpoint.length > 2048 ||
      typeof sub.keys?.auth !== "string" || typeof sub.keys?.p256dh !== "string" ||
      !/^[\w-]+$/.test(sub.keys.auth) || !/^[\w-]+$/.test(sub.keys.p256dh) ||
      Buffer.from(sub.keys.auth, "base64url").length !== 16 ||
      Buffer.from(sub.keys.p256dh, "base64url").length !== 65) throw new Error("Invalid subscription");
  const url = new URL(sub.endpoint);
  const host = url.hostname;
  if (url.protocol !== "https:" || url.port || url.username || url.password ||
      !(host === "fcm.googleapis.com" || host === "updates.push.services.mozilla.com" ||
        host.endsWith(".push.apple.com") || host.endsWith(".notify.windows.com"))) throw new Error("Invalid push service");
  return { endpoint: sub.endpoint, keys: { auth: sub.keys.auth, p256dh: sub.keys.p256dh } };
}
export async function ownedSubscriber(subscription: webpush.PushSubscription) {
  const id = subscriberId(subscription.endpoint);
  const record = await redis().hget<Subscriber>(SUBSCRIPTIONS, id);
  if (!record || !sameSecret(record.subscription.keys.auth, subscription.keys.auth) ||
      !sameSecret(record.subscription.keys.p256dh, subscription.keys.p256dh)) return null;
  return { id, record };
}
export async function removeSubscriber(id: string) {
  const tx = redis().multi(); tx.hdel(SUBSCRIPTIONS, id); tx.del(`push:seen:${id}`); await tx.exec();
}
export async function sendPush(subscription: webpush.PushSubscription, content: { title: string; body: string; url: string; id: string }) {
  return webpush.sendNotification(subscription, JSON.stringify(content), {
    vapidDetails: { subject: "https://solomonislandsmission.mckaycourt.com", publicKey: process.env.VAPID_PUBLIC_KEY!, privateKey: process.env.VAPID_PRIVATE_KEY! },
    TTL: 86400, timeout: 5000, urgency: "normal",
  });
}
export class HttpError extends Error { constructor(public status: number, message: string) { super(message); } }
export async function publicRequest(request: Request) {
  if (!configured()) throw new HttpError(503, "Notifications are not ready yet. Please try again later.");
  if (request.headers.get("origin") !== new URL(request.url).origin) throw new HttpError(403, "Please use the website to manage notifications.");
  if (Number(request.headers.get("content-length") ?? 0) > 8192) throw new HttpError(413, "Request too large.");
  const body = await request.text();
  if (body.length > 8192) throw new HttpError(413, "Request too large.");
  let parsed;
  try { parsed = JSON.parse(body); } catch { throw new HttpError(400, "Invalid request."); }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const bucket = `push:rate:${subscriberId(ip)}:${Math.floor(Date.now() / 3600000)}`;
  const count = await redis().incr(bucket);
  if (count === 1) await redis().expire(bucket, 3700);
  if (count > 60) throw new HttpError(429, "Too many requests. Please try again later.");
  return parsed;
}
export function errorResponse(error: unknown) {
  if (error instanceof HttpError) return Response.json({ error: error.message }, { status: error.status });
  console.error("Notification request failed", error instanceof Error ? error.name : "Unknown error");
  return Response.json({ error: "Could not complete that request. Please try again." }, { status: 500 });
}
// A short lease prevents overlapping deployment checks from sending the same batch.
export async function publishNotifications() {
  const db = redis(); const lock = randomUUID();
  if (!await db.set("push:publish-lock", lock, { nx: true, ex: 120 })) return { busy: true, sent: 0 };
  let sent = 0; let failed = 0; const started = Date.now();
  try {
    const subscribers = await db.hgetall<Record<string, Subscriber>>(SUBSCRIPTIONS) ?? {};
    for (const id of Object.keys(subscribers)) {
      const seen = new Set(await db.smembers<string[]>(`push:seen:${id}`));
      for (const content of [...notificationContent].reverse()) {
        if (seen.has(content.id)) continue;
        if (Date.now() - started > 40000 || sent + failed >= 50) return { sent, failed, more: true };
        // Re-read preferences so a concurrent unsubscribe/save takes effect.
        const current = await db.hget<Subscriber>(SUBSCRIPTIONS, id);
        if (!current) break;
        if (!current[content.kind]) { await db.sadd(`push:seen:${id}`, content.id); continue; }
        try {
          await sendPush(current.subscription, content);
          await db.sadd(`push:seen:${id}`, content.id); sent++;
        } catch (error) {
          const status = (error as { statusCode?: number }).statusCode;
          if (status === 404 || status === 410) { await removeSubscriber(id); break; }
          failed++; // Keep unseen entries for a later retry.
        }
      }
    }
    return { sent, failed, more: false };
  } finally {
    await db.eval("if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end", ["push:publish-lock"], [lock]);
  }
}
export async function saveSubscriber(record: Subscriber) {
  const id = subscriberId(record.subscription.endpoint);
  const existing = await dbRecord(id);
  if (existing && !sameSecret(existing.subscription.keys.auth, record.subscription.keys.auth)) throw new HttpError(403, "Subscription could not be verified.");
  const tx = redis().multi();
  tx.hset(SUBSCRIPTIONS, { [id]: record });
  // Subscribe from today's archive; don't send historical posts or posts from an opted-out category.
  const baseline = notificationContent.filter((item) => !existing || !existing[item.kind]).map((item) => item.id);
  if (baseline.length) tx.sadd(`push:seen:${id}`, baseline[0], ...baseline.slice(1));
  await tx.exec();
}
async function dbRecord(id: string) { return redis().hget<Subscriber>(SUBSCRIPTIONS, id); }
