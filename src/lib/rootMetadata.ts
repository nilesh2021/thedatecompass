import type { Metadata, Viewport } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://www.thedatecompass.com"),

  title: {
    default: "TheDateCompass",
    template: "%s | TheDateCompass",
  },

  description:
    "Compare dating websites, adult dating platforms, and AI companion services by country on this independent directory. Offers are third-party listings.",

  openGraph: {
    siteName: "TheDateCompass",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/extra/2.jpg",
        width: 1200,
        height: 630,
        alt: "TheDateCompass",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/extra/2.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

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
