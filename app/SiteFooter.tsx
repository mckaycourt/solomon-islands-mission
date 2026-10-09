import Link from "next/link";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
        <span className="brand-mark">S</span><span>Letters from the Solomon Islands</span>
      </Link>
      <p>Solomon Islands Honiara Mission · 2026</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
