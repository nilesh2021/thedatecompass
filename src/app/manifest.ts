import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TheDateCompass",
    short_name: "TheDateCompass",
    description: "Compare dating sites and AI girlfriend platforms worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff3d6e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
