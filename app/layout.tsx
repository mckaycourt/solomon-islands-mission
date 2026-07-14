import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "mckaycourt.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Letters from the Solomon Islands",
    description: "Dispatches from President and Sister Court in the Solomon Islands Honiara Mission.",
    openGraph: {
      title: "Letters from the Solomon Islands",
      description: "Dispatches from President and Sister Court in the Solomon Islands Honiara Mission.",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Letters from the Solomon Islands" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Letters from the Solomon Islands",
      description: "Dispatches from the Solomon Islands Honiara Mission.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
