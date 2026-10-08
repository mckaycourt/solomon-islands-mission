import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { scriptureThoughts } from "../thoughts";

export function generateStaticParams() {
  return scriptureThoughts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const thought = scriptureThoughts.find((entry) => entry.slug === slug);
  return { title: thought ? `${thought.title} | Daily Scripture Thoughts` : "Thought not found" };
}

export default async function ScriptureThoughtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thought = scriptureThoughts.find((entry) => entry.slug === slug);
  if (!thought) notFound();

  return (
    <main className="thoughts-page" id="top">
      <article className="thought-reading">
        <header className="thoughts-heading">
          <Link className="text-link" href="/scripture-thoughts">← Daily Scripture Thoughts</Link>
          <h1>{thought.title}</h1>
          <div className="thought-reading-meta">
            <nav className="thought-chapters" aria-label="Today's scripture reading">
              <span>Today’s reading</span>
              {thought.chapters.map((chapter) => (
                <a key={chapter.url} href={chapter.url}>{chapter.label}</a>
              ))}
            </nav>
            <p className="eyebrow">{thought.day}</p>
          </div>
        </header>
        <div className="thought-copy">
          {thought.blocks.map((block, index) => block.kind === "scripture" ? (
            <blockquote key={index}>
              {block.paragraphs.map((paragraph, verseIndex) => <p key={verseIndex}>{paragraph}</p>)}
              <a className="scripture-source-link" href={block.url} aria-label={`Read ${block.reference} in Gospel Library`}>
                {block.reference}
              </a>
            </blockquote>
          ) : block.kind === "heading" ? (
            <h2 key={index}>{block.text}</h2>
          ) : (
            <p key={index} className={block.kind === "question" ? "thought-question" : undefined}>{block.text}</p>
          ))}
        </div>
        <Link className="text-link" href="/scripture-thoughts">← All daily scripture thoughts</Link>
      </article>
    </main>
  );
}
