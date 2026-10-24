import type { Metadata } from "next";
import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";

const PAGE_URL = "https://www.thedatecompass.com/top-offers";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: "Casual Dating Sites for Adults 2026 | TheDateCompass",
  },
  description:
    "Compare casual dating platforms for adults. Review signup flow, messaging, and listed features before visiting a third-party provider. Adults 18+.",
  keywords: [
    "casual dating",
    "casual dating sites",
    "adult casual dating",
    "flirt apps",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Casual Dating Sites for Adults 2026 | TheDateCompass",
    description:
      "Compare casual dating platforms for adults on TheDateCompass.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Casual dating offers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casual Dating Sites for Adults 2026 | TheDateCompass",
    description:
      "Compare casual dating platforms for adults on TheDateCompass.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function TopOffersPage() {
  const tab = getOfferTabByRoute("casual");
  if (!tab) notFound();

  return <OffersCategoryLanding tab={tab} />;
}
