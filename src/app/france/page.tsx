import type { Metadata } from "next";
import FranceLandingPage from "@/components/country/france/FranceLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/france`;
const OG_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80";

/**
 * France route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in France | Compare Offers",
  description:
    "Compare adult dating and social platforms for France visitors. Browse casual, gay dating, mature, niche, and AI companion listings, plus a practical guide to choosing a third-party site.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Adult Dating Platforms in France | Compare Offers",
    description:
      "A France-focused comparison of third-party adult dating and companion listings, with category links and practical guidance for visitors comparing options.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "France dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in France | Compare Offers",
    description:
      "A France-focused comparison of third-party adult dating and companion listings, with category links and practical guidance for visitors comparing options.",
    images: [OG_IMAGE],
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
};

export default function FrancePage() {
  return <FranceLandingPage />;
}
