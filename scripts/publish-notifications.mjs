// Called after a successful production deployment; retries only unseen posts.
const base = 'https://solomonislandsmission.mckaycourt.com';
const secret = process.env.NOTIFICATIONS_PUBLISH_SECRET;
if (!secret) throw new Error('Missing NOTIFICATIONS_PUBLISH_SECRET');
const expected = process.env.EXPECTED_SHA;
let ready = !expected;
for (let attempt = 0; !ready && attempt < 60; attempt++) {
  const response = await fetch(`${base}/api/notifications/config`, { cache: 'no-store' });
  if (response.ok) {
    const config = await response.json();
    ready = config.available && config.version === expected;
  }
  if (!ready) await new Promise((resolve) => setTimeout(resolve, 10000));
}
if (!ready) throw new Error('Production did not become ready for this commit');
for (let batch = 0; batch < 100; batch++) {
  const response = await fetch(`${base}/api/notifications/publish`, {
    method: 'POST', headers: { Authorization: `Bearer ${secret}` },
    signal: AbortSignal.timeout(65000),
  });
  if (!response.ok) throw new Error(`Publishing notifications failed: ${response.status}`);
  const result = await response.json(); console.log(result);
  if (result.failed) throw new Error('Some deliveries failed; they remain queued for retry');
  if (!result.more && !result.busy) break;
  await new Promise((resolve) => setTimeout(resolve, 5000));
}
