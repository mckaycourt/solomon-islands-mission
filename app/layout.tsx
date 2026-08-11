import type { Metadata } from "next";
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

export const metadata: Metadata = {
    metadataBase: new URL("https://solomonislandsmission.mckaycourt.com"),
    title: "Letters from the Solomon Islands",
    description: "Letters from President and Sister Court in the Solomon Islands Honiara Mission.",
    openGraph: {
      title: "Letters from the Solomon Islands",
      description: "Letters from President and Sister Court in the Solomon Islands Honiara Mission.",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Letters from the Solomon Islands" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Letters from the Solomon Islands",
      description: "Letters from the Solomon Islands Honiara Mission.",
      images: ["/og.png"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
