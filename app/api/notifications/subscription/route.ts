import { publicRequest, parseSubscription, saveSubscriber, ownedSubscriber, removeSubscriber, errorResponse, HttpError } from "../../../../lib/notifications";
export async function POST(request: Request) {
  try {
    const body = await publicRequest(request);
    let subscription;
    try { subscription = parseSubscription(body.subscription); } catch { throw new HttpError(400, "Invalid subscription."); }
    if (typeof body.letters !== "boolean" || typeof body.thoughts !== "boolean") throw new HttpError(400, "Choose your notifications.");
    if (body.action === "status") {
      const owned = await ownedSubscriber(subscription);
      return Response.json({ saved: Boolean(owned), letters: owned?.record.letters, thoughts: owned?.record.thoughts });
    }
    if (!body.letters && !body.thoughts) throw new HttpError(400, "Choose at least one type of notification.");
    await saveSubscriber({ subscription, letters: body.letters, thoughts: body.thoughts });
    return Response.json({ saved: true });
  } catch (error) { return errorResponse(error); }
}
export async function DELETE(request: Request) {
  try {
    const body = await publicRequest(request);
    let subscription;
    try { subscription = parseSubscription(body.subscription); } catch { throw new HttpError(400, "Invalid subscription."); }
    const owned = await ownedSubscriber(subscription);
    if (owned) await removeSubscriber(owned.id);
    return Response.json({ removed: true });
  } catch (error) { return errorResponse(error); }
}
