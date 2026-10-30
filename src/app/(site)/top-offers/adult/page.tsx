import type { Metadata } from "next";
import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";
import { topicSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/top-offers/adult";
const OG_IMAGE = "https://www.thedatecompass.com/images/extra/2.jpg";

export function generateMetadata(): Metadata {
  const tab = getOfferTabByRoute("adult");
  if (!tab) return {};

  const seo = topicSeo(
    "Adult Dating Platforms Comparison | TheDateCompass",
    "Compare adult dating services by category focus, niche targeting, and signup experience before you visit a provider.",
  );

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: PAGE_URL,
      siteName: "TheDateCompass",
      type: "website",
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: "Adult dating offers" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
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
