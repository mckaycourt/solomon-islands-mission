import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="thought-list">
        {scriptureThoughts.map((thought) => (
          <article className="thought-card" key={thought.slug}>
            <p className="eyebrow">{thought.day}</p>
            <h2><Link href={`/scripture-thoughts/${thought.slug}`}>{thought.title}</Link></h2>
            <Link className="read-letter-link" href={`/scripture-thoughts/${thought.slug}`}>Read the thought <span>→</span></Link>
          </article>
        ))}
      </div>
    </main>
  );
}
