import { letters } from "../app/letters";
import { scriptureThoughts } from "../app/scripture-thoughts/thoughts";

export type NotificationKind = "letters" | "thoughts";
export const notificationContent = [
  ...letters.map((letter) => ({ id: `letters:${letter.slug}`, kind: "letters" as const,
    title: `New letter: ${letter.title}`, body: letter.excerpt, url: `/letters/${letter.slug}` })),
  ...scriptureThoughts.map((thought) => ({ id: `thoughts:${thought.slug}`, kind: "thoughts" as const,
    title: `Daily Scripture Thought: ${thought.title}`, body: `${thought.day} · President & Sister Court`,
    url: `/scripture-thoughts/${thought.slug}` })),
];
