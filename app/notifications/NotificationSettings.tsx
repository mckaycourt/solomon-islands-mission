"use client";

import { useEffect, useState } from "react";

async function request(path: string, body: object, method = "POST") {
  const response = await fetch(`/api/notifications/${path}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error ?? "Please try again.");
  return data;
}

export default function NotificationSettings() {
  const [letters, setLetters] = useState(true);
  const [thoughts, setThoughts] = useState(true);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [publicKey, setPublicKey] = useState("");
  const [state, setState] = useState("loading");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let active = true;
    async function setup() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const standalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone;
      if (isIOS && !standalone) { if (active) setState("install"); return; }
      if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) { if (active) setState("unsupported"); return; }
      try {
        const response = await fetch("/api/notifications/config", { cache: "no-store" });
        const config = await response.json();
        if (!config.available) { if (active) setState("unavailable"); return; }
        await navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" });
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        const preferences = sub ? await request("subscription", { action: "status", subscription: sub.toJSON(), letters: true, thoughts: true }) : null;
        if (active) {
          setRegistration(reg); setPublicKey(config.publicKey); setSubscription(sub); setSaved(Boolean(preferences?.saved));
          if (preferences?.saved) { setLetters(preferences.letters); setThoughts(preferences.thoughts); }
          setState(Notification.permission === "denied" ? "denied" : "ready");
        }
      } catch { if (active) { setState("unavailable"); setMessage("Could not load notification settings. Reload this page to try again."); } }
    }
    void setup(); return () => { active = false; };
  }, []);

  async function enable() {
    setBusy(true); setMessage("");
    try {
      // iOS requires this prompt directly inside the reader's button gesture.
      const permission = await Notification.requestPermission();
      if (permission !== "granted") { setState(permission === "denied" ? "denied" : "ready"); setMessage("Notifications weren’t enabled. You can try again when you’re ready."); return; }
      const key = Uint8Array.from(atob(publicKey.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
      const sub = subscription ?? await registration!.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key });
      setSubscription(sub);
      await request("subscription", { subscription: sub.toJSON(), letters, thoughts });
      setSaved(true); setMessage("Notifications are on for this device. Try a test below.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not enable notifications."); }
    finally { setBusy(false); }
  }
  async function disable() {
    if (!subscription) return;
    setBusy(true); setMessage("");
    try {
      await request("subscription", { subscription: subscription.toJSON() }, "DELETE");
      await subscription.unsubscribe(); setSubscription(null); setSaved(false); setMessage("Notifications are off for this device.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not turn notifications off."); }
    finally { setBusy(false); }
  }
  async function test(kind: "letters" | "thoughts") {
    if (!subscription) return;
    setBusy(true); setMessage("");
    try {
      await request("test", { subscription: subscription.toJSON(), kind });
      setMessage("Test sent! Check your notifications and tap it to open the post. Wait 30 seconds before another test.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not send the test."); }
    finally { setBusy(false); }
  }
  return (
    <section className="notification-card" aria-labelledby="notification-settings-title">
      <h2 id="notification-settings-title">A little note when there’s something new.</h2>
      <p>Get a notification when a new letter or daily scripture thought is published. Tap it to open that post.</p>
      {state === "loading" && <p role="status">Loading notification settings…</p>}
      {state === "install" && <div className="notification-instructions"><h3>First, add this site to your iPhone Home Screen.</h3><ol><li>Open this page in Safari.</li><li>Tap Share, then <strong>Add to Home Screen</strong>. Keep <strong>Open as Web App</strong> on if shown.</li><li>Open the new <strong>Court Mission</strong> icon and return to <strong>Notifications</strong>.</li><li>Choose your updates and tap <strong>Enable notifications</strong>, then <strong>Allow</strong>.</li></ol><p>Requires iOS 16.4 or later.</p></div>}
      {state === "unsupported" && <p>This browser doesn’t support push notifications. On an iPhone, use Safari and add the site to your Home Screen.</p>}
      {state === "unavailable" && <p>Notifications are temporarily unavailable. Please try again later.</p>}
      {state === "denied" && <p>Notifications are blocked for this site. On iPhone, open Settings → Notifications → Court Mission and allow notifications. Then reopen this page.</p>}
      {state === "ready" && <>
        <fieldset disabled={busy}><legend>Send me updates for</legend><label><input type="checkbox" checked={letters} onChange={(e) => setLetters(e.target.checked)} /> New letters</label><label><input type="checkbox" checked={thoughts} onChange={(e) => setThoughts(e.target.checked)} /> Daily scripture thoughts</label></fieldset>
        <div className="notification-actions"><button className="notification-primary" disabled={busy || (!letters && !thoughts)} onClick={enable}>{busy ? "Working…" : saved ? "Save preferences" : "Enable notifications"}</button>{subscription && <button disabled={busy} onClick={disable}>Turn off notifications</button>}</div>
        {saved && <div className="notification-test"><h3>Try it on this device</h3><p>Each test opens the latest post of that type.</p><div className="notification-actions"><button disabled={busy} onClick={() => test("letters")}>Test a letter notification</button><button disabled={busy} onClick={() => test("thoughts")}>Test a daily thought notification</button></div></div>}
      </>}
      <p className="notification-status" role="status" aria-live="polite">{message}</p>
      <p className="notification-privacy">No account needed. Your choices apply to this device, and you can turn notifications off here at any time.</p>
    </section>
  );
}
