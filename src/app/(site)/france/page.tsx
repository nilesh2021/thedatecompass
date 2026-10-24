import type { Metadata } from "next";
import FranceLandingPage from "@/components/country/france/FranceLandingPage";
import {
  FRANCE_PAGE_LAST_UPDATED,
  franceFaqs,
  franceOffers,
  getFranceReviewHref,
} from "@/data/countries/france";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/france`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

/**
 * France route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in France | Compare Offers",
  description:
    "Compare adult dating sites and platforms in France by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.",
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if a French-language version of this page ships.
  },
  openGraph: {
    title: "Adult Dating Platforms in France | Compare Offers",
    description:
      "A France-focused comparison of third-party adult dating and companion listings, with category links and practical guidance for visitors comparing options.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "France dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in France | Compare Offers",
    description:
      "A France-focused comparison of third-party adult dating and companion listings, with category links and practical guidance for visitors comparing options.",
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

const META_DESCRIPTION =
  "Compare adult dating sites and platforms in France by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.";

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in France (2026)",
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: FRANCE_PAGE_LAST_UPDATED.iso,
  isPartOf: {
    "@type": "WebSite",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 18,
  },
  about: [
    "Adult dating sites in France",
    "Gay dating",
    "Mature dating",
    "Adult social",
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: franceOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${getFranceReviewHref(offer) ?? "/france"}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "France",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: franceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FrancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FranceLandingPage />
    </>
  );
}
