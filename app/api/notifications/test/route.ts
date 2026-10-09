import { publicRequest, parseSubscription, ownedSubscriber, sendPush, redis, removeSubscriber, errorResponse, HttpError } from "../../../../lib/notifications";
import { notificationContent } from "../../../../lib/notification-content";
export async function POST(request: Request) {
  try {
    const body = await publicRequest(request);
    let subscription;
    try { subscription = parseSubscription(body.subscription); } catch { throw new HttpError(400, "Invalid subscription."); }
    const owned = await ownedSubscriber(subscription);
    if (!owned) throw new HttpError(404, "Enable notifications on this device first.");
    if (!await redis().set(`push:test:${owned.id}`, "1", { nx: true, ex: 30 })) throw new HttpError(429, "Wait 30 seconds before sending another test.");
    const content = notificationContent.find((item) => item.kind === (body.kind === "letters" ? "letters" : "thoughts"))!;
    try { await sendPush(subscription, { ...content, id: `test:${content.id}`, title: `Test · ${content.title}` }); }
    catch (error) {
      if ([404, 410].includes((error as { statusCode: number }).statusCode)) {
        await removeSubscriber(owned.id);
        throw new HttpError(410, "This subscription expired. Turn notifications off and enable them again.");
      }
      throw error;
    }
    return Response.json({ sent: true });
  } catch (error) { return errorResponse(error); }
}
