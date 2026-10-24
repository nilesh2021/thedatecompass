import type { Metadata } from "next";
import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";

const PAGE_URL = "https://www.thedatecompass.com/top-offers/adult";
const OG_IMAGE = "https://www.thedatecompass.com/images/extra/2.jpg";

export function generateMetadata(): Metadata {
  const tab = getOfferTabByRoute("adult");
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
        { url: OG_IMAGE, width: 1200, height: 630, alt: "Adult dating offers" },
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

export default function AdultOffersPage() {
  const tab = getOfferTabByRoute("adult");
  if (!tab) notFound();

  return <OffersCategoryLanding tab={tab} />;
}
