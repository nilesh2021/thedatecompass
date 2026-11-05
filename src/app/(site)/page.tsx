import type { Metadata } from "next";
import HomePage from "@/components/Home/HomePage";
import { topicSeo } from "@/lib/pageSeo";

const seo = topicSeo(
  "Dating Sites by Country | TheDateCompass",
  "Compare dating websites and adult dating platforms by country on this independent directory.",
);

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "dating sites",
    "adult dating sites",
    "dating by country",
    "casual dating",
    "gay dating",
    "dating site comparison",
    "TheDateCompass",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com",
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.thedatecompass.com/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "TheDateCompass dating comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [
      "https://www.thedatecompass.com/images/og/default.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Dating Directory",
  verification: {
    other: {
      "impact-site-verification": "bbf507ac-9ef6-4fce-8439-fcd5938f83cf",
      "msvalidate.01": "557CEBF872EEAF8421A01C88070C224C",
    },
  },
};

export default function Home() {
  return <HomePage country="global" />;
}
