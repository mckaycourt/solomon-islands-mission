import { SiteMenu } from "./SiteMenu";
import Link from "next/link";
import { letters } from "./letters";
import { scriptureThoughts } from "./scripture-thoughts/thoughts";

export default function LettersHome() {
  const latestLetter = letters[0];

  return (
    <>
      <header className="site-header publication-header">
        <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span>
          <span>Letters from the Solomon Islands</span>
        </Link>
        <SiteMenu />
      </header>

      <main className="publication-home" id="top">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="eyebrow">Solomon Islands Honiara Mission · 2026</p>
            <h1 id="home-title">Letters from the <em>Solomon Islands</em></h1>
            <p className="home-intro">
              Letters from President and Sister Court about the people, places, miracles, and everyday work of their mission.
            </p>
            <div className="home-actions">
              <Link className="primary-link" href={`/letters/${latestLetter.slug}`}>Read the latest letter <span>→</span></Link>
              <a className="text-link" href="#letters">Browse all letters ↓</a>
            </div>
          </div>
          <figure className="home-hero-photo">
            <img src="/photos/hero-sunset.jpg" alt="President and Sister Court together near the water at sunset" />
            <figcaption>President &amp; Sister Court · Solomon Islands</figcaption>
          </figure>
        </section>

        <section className="letters-archive" id="letters" aria-labelledby="letters-title">
          <header className="archive-heading">
            <div>
              <p className="kicker">The letters</p>
              <h2 id="letters-title">From Honiara, with love.</h2>
            </div>
          </header>

          <div className="letter-list">
            {letters.map((letter) => (
              <article className="letter-card" key={letter.slug}>
                <Link className="letter-card-image" href={`/letters/${letter.slug}`} aria-label={`Read ${letter.title}`}>
                  <img src={letter.image} alt={letter.imageAlt} />
                  <span>Letter {letter.number}</span>
                </Link>
                <div className="letter-card-copy">
                  <p className="eyebrow">{letter.date}</p>
                  <h3><Link href={`/letters/${letter.slug}`}>{letter.title}</Link></h3>
                  <p>{letter.excerpt}</p>
                  <div className="letter-card-meta">
                    <span>{letter.author}</span>
                  </div>
                  <Link className="read-letter-link" href={`/letters/${letter.slug}`}>Read the letter <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="home-thoughts" aria-labelledby="thoughts-title">
          <div>
            <p className="kicker">Daily Scripture Thoughts</p>
            <h2 id="thoughts-title">A moment in the scriptures.</h2>
            <Link className="text-link" href="/scripture-thoughts">Browse daily scripture thoughts →</Link>
          </div>
          <article className="thought-card">
            <p className="eyebrow">{scriptureThoughts[0].day}</p>
            <h3><Link href={`/scripture-thoughts/${scriptureThoughts[0].slug}`}>{scriptureThoughts[0].title}</Link></h3>
            <Link className="read-letter-link" href={`/scripture-thoughts/${scriptureThoughts[0].slug}`}>Read the thought <span>→</span></Link>
          </article>
        </section>
      </main>

      <footer>
        <Link className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></Link>
        <p>Solomon Islands Honiara Mission · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
