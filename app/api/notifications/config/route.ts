import { configured } from "../../../../lib/notifications";
export const dynamic = "force-dynamic";
export function GET() {
  return Response.json({ available: configured(), publicKey: process.env.VAPID_PUBLIC_KEY ?? null,
    version: process.env.VERCEL_GIT_COMMIT_SHA ?? "local" }, { headers: { "Cache-Control": "no-store" } });
}
