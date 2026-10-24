import type { Metadata, Viewport } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://www.thedatecompass.com"),

  title: {
    default: "TheDateCompass",
    template: "%s | TheDateCompass",
  },

  description: "Compare dating sites and AI girlfriend platforms worldwide.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  other: {
    "mitgo-verification": "f5b6679f-e350-42f0-9599-d2f5070142a2",
  },
};

export const rootViewport: Viewport = {
  themeColor: "#ff3d6e",
};
