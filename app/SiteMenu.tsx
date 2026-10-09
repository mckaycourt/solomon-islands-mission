"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { letters } from "./letters";
import "./site-menu.css";

export function SiteMenu({ shareUrl }: { shareUrl?: string }) {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!menu.current?.contains(event.target as Node) && menu.current) {
        menu.current.open = false;
      }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  function close() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details
      className="site-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          close();
          menu.current.querySelector("summary")?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
      }}
    >
      <summary className="site-menu-toggle" aria-label="Open navigation">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </summary>
      <nav className="site-menu-links" aria-label="Primary navigation" onClick={close}>
        <Link href="/#letters">Letters</Link>
        <Link href={`/letters/${letters[0].slug}`}>Latest letter</Link>
        <Link href="/scripture-thoughts">Daily Scripture Thoughts</Link>
        <Link href="/photographs">Photographs</Link>
        <Link href="/notifications">Notifications</Link>
        {shareUrl && <a href={shareUrl}>Share this letter</a>}
      </nav>
    </details>
  );
}
