import type { Metadata } from "next";
import ThoughtArchive from "./ThoughtArchive";
import { scriptureThoughts } from "./thoughts";

export const metadata: Metadata = {
  title: "Daily Scripture Thoughts | Letters from the Solomon Islands",
  description: "Daily scripture thoughts from President and Sister Court.",
};

export default function ScriptureThoughtsPage() {
  return (
    <main className="thoughts-page" id="top">
      <header className="thoughts-heading">
        <p className="eyebrow">President &amp; Sister Court</p>
        <h1>Daily Scripture <em>Thoughts</em></h1>
        <p className="deck">Scripture study, reflections, and questions to carry into each day.</p>
      </header>
      <ThoughtArchive thoughts={scriptureThoughts.map((thought) => {
        const paragraphs = thought.blocks.flatMap((block) => block.kind === "paragraph" ? [block.text] : []);
        const excerpt = paragraphs.find((text) => text.length > 100) ?? paragraphs[0] ?? "";
        return {
          slug: thought.slug,
          title: thought.title,
          day: thought.day,
          excerpt: excerpt.length > 220 ? `${excerpt.slice(0, excerpt.lastIndexOf(" ", 220))}…` : excerpt,
        };
      })} />
    </main>
  );
}
