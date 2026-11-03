import SinPartyLanding from "@/components/landing/SinPartyLanding";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { sinpartyFaqs, sinpartyVisuals } from "@/data/sinpartyOffers";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/offers/sinparty";

const TITLE = "SinParty: Freemium Live Cam for Adults | TheDateCompass";

const DESCRIPTION =
  "SinParty is a new freemium live cam platform for adults. Start free, watch in private, and continue to the site. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "SinParty",
    "live cam",
    "freemium live cam",
    "adult live cam",
    "private live cam",
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
        url: sinpartyVisuals.hero,
        width: 1200,
        height: 630,
        alt: "SinParty freemium live cam for adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [sinpartyVisuals.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SinPartyPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <SinPartyLanding />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "SinParty", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sinpartyFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
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
