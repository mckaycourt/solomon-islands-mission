import { SiteMenu } from "../SiteMenu";
import type { Metadata } from "next";
import Link from "next/link";
import NotificationSettings from "./NotificationSettings";
import "./notifications.css";
export const metadata: Metadata = { title: "Notifications | Letters from the Solomon Islands" };
export default function NotificationsPage() {
  return <><header className="site-header publication-header"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></Link><SiteMenu /></header><main className="notifications-page"><p className="eyebrow">President &amp; Sister Court</p><h1>Stay <em>in touch.</em></h1><NotificationSettings /></main></>;
}
