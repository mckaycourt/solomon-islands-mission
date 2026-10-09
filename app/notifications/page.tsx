import { SiteMenu } from "../SiteMenu";
import { SiteFooter } from "../SiteFooter";
import type { Metadata } from "next";
import Link from "next/link";
import NotificationSettings from "./NotificationSettings";
import "./notifications.css";
export const metadata: Metadata = { title: "Get updates | Letters from the Solomon Islands" };
export default function NotificationsPage() {
  return (
    <>
      <header className="site-header publication-header">
        <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span><span>Letters from the Solomon Islands</span>
        </Link>
        <SiteMenu />
      </header>
      <main className="notifications-page" id="top">
        <header className="thoughts-heading">
          <p className="eyebrow">President &amp; Sister Court</p>
          <h1>Get <em>updates</em></h1>
          <p className="deck">A little note when there’s something new.</p>
        </header>
        <NotificationSettings />
      </main>
      <SiteFooter />
    </>
  );
}
