import type { Metadata } from "next";
import GayDatingUsaLanding from "@/components/landing/GayDatingUsaLanding";
import JsonLd from "@/components/seo/JsonLd";
import { usaOffers } from "@/data/usaOffers";
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/offers/gay-dating-usa";
const TITLE = "Gay Adult Dating Sites in the USA | TheDateCompass";
const DESCRIPTION =
  "Gay adult dating sites in the USA: Manfinder lists profiles and direct messages for men. Adults 18+ only. Prices are on the provider site.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "gay adult dating sites in USA",
    "gay adult dating sites",
    "gay dating sites USA",
    "Manfinder",
    "men seeking men",
    "18+",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GayDatingUsaPage() {
  const gayOffers = usaOffers.filter((offer) =>
    offer.category.toLowerCase().includes("gay"),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "Gay dating USA", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          url: PAGE_URL,
        })}
      />
      <JsonLd
        data={itemListJsonLd(
          "Gay dating in the USA",
          gayOffers.map((offer) => ({ name: offer.name })),
        )}
      />
      <GayDatingUsaLanding />
    </>
  );
}
