import type { Metadata } from "next";
import Link from "next/link";
import { PhotoGallery } from "../PhotoGallery";
import { augustFiveArchivePhotos, monthOneArchivePhotos } from "./photoData";

export const metadata: Metadata = {
  title: "Photographs | Letters from the Solomon Islands",
  description: "Photographs from President and Sister Court’s letters from the Solomon Islands Honiara Mission.",
};

export default function PhotographsPage() {
  return (
    <>
      <header className="site-header publication-header">
        <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span>
          <span>Letters from the Solomon Islands</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#letters">All letters</Link>
          <Link className="nav-button" href="/letters/august-5">Latest letter</Link>
        </nav>
      </header>

      <main className="photographs-page" id="top">
        <header className="photographs-page-heading">
          <p className="eyebrow">Solomon Islands Honiara Mission · 2026</p>
          <h1>Photographs</h1>
        </header>

        <section className="photograph-archive-gallery" aria-labelledby="august-photos-title">
          <header>
            <p className="eyebrow">August 5, 2026</p>
            <h2 id="august-photos-title"><Link href="/letters/august-5">Evridai, Evridai</Link></h2>
          </header>
          <PhotoGallery photos={augustFiveArchivePhotos} showCaptions={false} />
        </section>

        <section className="photograph-archive-gallery" aria-labelledby="month-one-photos-title">
          <header>
            <p className="eyebrow">June 24 – July 13, 2026</p>
            <h2 id="month-one-photos-title"><Link href="/letters/month-one">Month One</Link></h2>
          </header>
          <PhotoGallery photos={monthOneArchivePhotos} showCaptions={false} />
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
