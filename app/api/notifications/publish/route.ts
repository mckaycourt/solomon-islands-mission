import { configured, sameSecret, publishNotifications, errorResponse } from "../../../../lib/notifications";
export const maxDuration = 60;
export async function POST(request: Request) {
  const secret = process.env.NOTIFICATIONS_PUBLISH_SECRET;
  if (!secret || !sameSecret(request.headers.get("authorization") ?? "", `Bearer ${secret}`)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return Response.json({ error: "Production only" }, { status: 403 });
  if (!configured()) return Response.json({ error: "Not configured" }, { status: 503 });
  try { return Response.json(await publishNotifications()); } catch (error) { return errorResponse(error); }
}
