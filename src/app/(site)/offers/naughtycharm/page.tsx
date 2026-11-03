import NaughtyCharmLanding from "@/components/landing/NaughtyCharmLanding";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { naughtycharmVisuals } from "@/data/naughtycharmOffers";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/offers/naughtycharm";

const TITLE = "NaughtyCharm: Discreet Dates, Without the Wait | TheDateCompass";

const DESCRIPTION =
  "Casual dating for adults in the USA. Confirm you are 18 or older, then continue to NaughtyCharm. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "NaughtyCharm",
    "casual dating",
    "USA dating",
    "discreet chat",
    "online dating",
    "adults 18+",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: naughtycharmVisuals.hero,
        width: 1200,
        height: 630,
        alt: "NaughtyCharm casual dating for USA adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [naughtycharmVisuals.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NaughtyCharmPage() {
  return (
    <div className="font-sans">
      <NaughtyCharmLanding />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "NaughtyCharm", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: PAGE_URL,
          isPartOf: {
            "@type": "WebSite",
            name: "TheDateCompass",
            url: "https://www.thedatecompass.com",
          },
        }}
      />
    </div>
  );
}
