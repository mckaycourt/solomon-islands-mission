import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { id: "/", name: "Letters from the Solomon Islands", short_name: "Court Mission",
    description: "Letters and daily scripture thoughts from President and Sister Court.",
    start_url: "/", scope: "/", display: "standalone", background_color: "#f7f4ee", theme_color: "#24493f",
    icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" }] };
}
