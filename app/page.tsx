import { letters } from "./letters";

export default function LettersHome() {
  const latestLetter = letters[0];

  return (
    <>
      <header className="site-header publication-header">
        <a className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span>
          <span>Letters from the Solomon Islands</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#letters">Letters</a>
          <a className="nav-button" href={`/letters/${latestLetter.slug}`}>Latest letter</a>
        </nav>
      </header>

      <main className="publication-home" id="top">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="eyebrow">Solomon Islands Honiara Mission · 2026</p>
            <h1 id="home-title">Letters from the <em>Solomon Islands</em></h1>
            <p className="home-intro">
              Dispatches from President and Sister Court about the people, places, miracles, and everyday work of their mission.
            </p>
            <div className="home-actions">
              <a className="primary-link" href={`/letters/${latestLetter.slug}`}>Read the latest letter <span>→</span></a>
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
            <p>Each new letter will have its own permanent page here.</p>
          </header>

          <div className="letter-list">
            {letters.map((letter) => (
              <article className="letter-card" key={letter.slug}>
                <a className="letter-card-image" href={`/letters/${letter.slug}`} aria-label={`Read ${letter.title}`}>
                  <img src={letter.image} alt={letter.imageAlt} />
                  <span>Dispatch {letter.dispatch}</span>
                </a>
                <div className="letter-card-copy">
                  <p className="eyebrow">{letter.date}</p>
                  <h3><a href={`/letters/${letter.slug}`}>{letter.title}</a></h3>
                  <p>{letter.excerpt}</p>
                  <div className="letter-card-meta">
                    <span>{letter.author}</span>
                    <span>{letter.readingTime}</span>
                  </div>
                  <a className="read-letter-link" href={`/letters/${letter.slug}`}>Read the letter <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></a>
        <p>Solomon Islands Honiara Mission · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
