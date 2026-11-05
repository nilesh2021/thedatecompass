import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import FreeUsaDatingSitesLanding from "@/components/landing/FreeUsaDatingSitesLanding";
import JsonLd from "@/components/seo/JsonLd";
import { adultImages } from "@/data/adultOfferImages";
import { usaOffers } from "@/data/usaOffers";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/free-usa-dating-sites";
const OG_IMAGE = `https://www.thedatecompass.com${adultImages.alt}`;

export const metadata: Metadata = {
  title: {
    absolute: "Free USA Dating Sites for Casual Connections | TheDateCompass",
  },
  description:
    "Discover free and free-to-join dating sites available in the USA. Compare platforms for casual dating, meeting new people and online connections.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free USA Dating Sites for Casual Connections | TheDateCompass",
    description:
      "Discover free and free-to-join dating sites available in the USA. Compare platforms for casual dating, meeting new people and online connections.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Free USA dating sites for casual connections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free USA Dating Sites for Casual Connections | TheDateCompass",
    description:
      "Discover free and free-to-join dating sites available in the USA. Compare platforms for casual dating, meeting new people and online connections.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeUsaDatingSitesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Free USA Dating Sites", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={itemListJsonLd(
          "Free USA dating sites",
          usaOffers.map((offer) => ({ name: offer.name })),
        )}
      />
      <Header />
      <main>
        <FreeUsaDatingSitesLanding />
      </main>
      <Footer />
    </>
  );
}
