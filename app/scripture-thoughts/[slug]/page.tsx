import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  const thoughtIndex = scriptureThoughts.findIndex((entry) => entry.slug === slug);
  const thought = scriptureThoughts[thoughtIndex];
  if (!thought) notFound();
  const previousThought = scriptureThoughts[thoughtIndex + 1];
  const nextThought = scriptureThoughts[thoughtIndex - 1];

  return (
    <main className="thoughts-page" id="top">
      <article className="thought-reading">
        <header className="thoughts-heading">
          <Link className="text-link" href="/scripture-thoughts">← Daily Scripture Thoughts</Link>
          <h1>{thought.title}</h1>
          <div className="thought-reading-meta">
            <p className="eyebrow">{thought.day}</p>
            <nav className="thought-chapters" aria-label="Scripture chapters">
              {thought.chapters.map((chapter) => (
                <a key={chapter.url} href={chapter.url}>{chapter.label}</a>
              ))}
            </nav>
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
          ) : block.kind === "image" ? (
            <a key={index} className="thought-diagram" href={block.src} aria-label="Open the vineyard diagram at full size">
              <Image src={block.src} alt={block.alt} width={block.width} height={block.height} unoptimized />
            </a>
          ) : block.kind === "heading" ? (
            <h2 key={index}>{block.text}</h2>
          ) : (
            <p key={index} className={block.kind === "question" ? "thought-question" : undefined}>{block.text}</p>
          ))}
        </div>
        <nav className="thought-navigation" aria-label="Daily thought navigation">
          {previousThought && (
            <Link href={`/scripture-thoughts/${previousThought.slug}`}>
              <small>← Previous thought · {previousThought.day}</small>
              <strong>{previousThought.title}</strong>
            </Link>
          )}
          {nextThought && (
            <Link className="thought-next" href={`/scripture-thoughts/${nextThought.slug}`}>
              <small>Next thought · {nextThought.day} →</small>
              <strong>{nextThought.title}</strong>
            </Link>
          )}
        </nav>
        <Link className="text-link" href="/scripture-thoughts">← All daily scripture thoughts</Link>
      </article>
    </main>
  );
}
