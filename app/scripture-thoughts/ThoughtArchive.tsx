import Link from "next/link";

type ArchiveEntry = {
  slug: string;
  title: string;
  day: string;
  excerpt: string;
};

export default function ThoughtArchive({ thoughts }: { thoughts: ArchiveEntry[] }) {
  const [latest, ...earlier] = thoughts;

  return (
    <>
      <article className="thought-feature">
        <div className="thought-feature-meta">
          <p className="eyebrow">Latest thought</p>
          <p className="eyebrow">{latest.day}</p>
        </div>
        <h2><Link href={`/scripture-thoughts/${latest.slug}`}>{latest.title}</Link></h2>
        <p className="thought-feature-excerpt">{latest.excerpt}</p>
        <Link className="read-letter-link" href={`/scripture-thoughts/${latest.slug}`}>Read the thought <span aria-hidden="true">→</span></Link>
      </article>

      <section className="thought-archive" aria-labelledby="thought-archive-heading">
        <div className="thought-archive-heading">
          <h2 id="thought-archive-heading">Earlier thoughts</h2>
          <p>{earlier.length} {earlier.length === 1 ? "thought" : "thoughts"}</p>
        </div>
        <ul className="thought-archive-list">
          {earlier.map((thought) => (
            <li key={thought.slug}>
              <Link className="thought-archive-entry" href={`/scripture-thoughts/${thought.slug}`}>
                <div className="thought-entry-meta">
                  <h3>{thought.title}</h3>
                  <p className="eyebrow">{thought.day}</p>
                </div>
                <p className="thought-entry-excerpt">{thought.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
