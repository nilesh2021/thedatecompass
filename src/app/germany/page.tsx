import type { Metadata } from "next";
import GermanyLandingPage from "@/components/country/germany/GermanyLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/germany`;
const OG_IMAGE =
  "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  title: "Adult Dating Sites in Germany 2026 | Compare Offers",
  description:
    "Compare adult dating and companion platforms for Germany visitors. Browse casual dating, gay dating, mature, adult social, and AI companion listings on TheDateCompass.",
  keywords: [
    "adult dating germany",
    "casual dating germany",
    "dating sites germany",
    "online dating germany",
    "AI companion germany",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Adult Dating Sites in Germany 2026 | Compare Offers",
    description:
      "Compare casual dating, gay dating, mature, adult social, and AI companion listings for Germany visitors on TheDateCompass.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_DE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Adult dating offers comparison for Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Sites in Germany 2026 | Compare Offers",
    description:
      "Compare casual dating, gay dating, mature, adult social, and AI companion listings for Germany visitors on TheDateCompass.",
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

export default function germanyPage() {
  return <GermanyLandingPage />;
}
