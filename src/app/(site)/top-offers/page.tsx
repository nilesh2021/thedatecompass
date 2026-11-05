import type { Metadata } from "next";
import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import JsonLd from "@/components/seo/JsonLd";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonLd";
import { topicSeo } from "@/lib/pageSeo";

const seo = topicSeo(
  "Casual Dating Sites for Adults | TheDateCompass",
  "Compare casual dating platforms for adults. Review signup flow, messaging, and listed features before visiting a third-party provider.",
);

const PAGE_URL = "https://www.thedatecompass.com/top-offers";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description:
    seo.description,
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
    title: seo.title,
    description:
      "Compare casual dating platforms for adults on TheDateCompass.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Casual dating offers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description:
      "Compare casual dating platforms for adults on TheDateCompass.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function TopOffersPage() {
  const tab = getOfferTabByRoute("casual");
  if (!tab) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Top Offers", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={itemListJsonLd(
          "Casual dating sites",
          tab.offers.map((offer) => ({ name: offer.name })),
        )}
      />
      <OffersCategoryLanding tab={tab} />
    </>
  );
}
