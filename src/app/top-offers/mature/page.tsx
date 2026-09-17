import type { Metadata } from "next";
import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";

const PAGE_URL = "https://www.thedatecompass.com/top-offers/mature";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1200&q=80";

export function generateMetadata(): Metadata {
  const tab = getOfferTabByRoute("mature");
  if (!tab) return {};

  return {
    title: {
      absolute: `${tab.seoTitle} | TheDateCompass`,
    },
    description: tab.seoDescription,
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      title: `${tab.seoTitle} | TheDateCompass`,
      description: tab.seoDescription,
      url: PAGE_URL,
      siteName: "TheDateCompass",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Mature dating offers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tab.seoTitle} | TheDateCompass`,
      description: tab.seoDescription,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default function MatureOffersPage() {
  const tab = getOfferTabByRoute("mature");
  if (!tab) notFound();

  return <OffersCategoryLanding tab={tab} />;
}
