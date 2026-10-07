import Link from "next/link";

export default function ScriptureThoughtsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header publication-header">
        <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span>
          <span>Letters from the Solomon Islands</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#letters">Letters</Link>
          <Link href="/scripture-thoughts">Daily Scripture Thoughts</Link>
          <Link href="/photographs">Photographs</Link>
        </nav>
      </header>
      {children}
      <footer>
        <Link className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></Link>
        <p>Solomon Islands Honiara Mission · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
