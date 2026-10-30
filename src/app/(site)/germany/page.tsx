import type { Metadata } from "next";
import GermanyLandingPage from "@/components/country/germany/GermanyLandingPage";
import {
  GERMANY_PAGE_LAST_UPDATED,
  germanyFaqs,
  germanyOffers,
  getGermanyReviewHref,
} from "@/data/germanyOffers";
import { getHubSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/germany`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;
const hub = getHubSeo("germany")!;
const PAGE_TITLE = hub.title;
const META_DESCRIPTION = hub.description;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang (alternates.languages.de or de-DE) only if a German-language version of this page ships.
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: hub.locale,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Adult dating offers comparison for Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
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

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: hub.headline,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: GERMANY_PAGE_LAST_UPDATED.iso,
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
    "Adult dating sites in Germany",
    "Casual dating",
    "Gay dating",
    "Mature dating",
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: germanyOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${offer.guideHref ?? getGermanyReviewHref(offer) ?? "/germany"}`,
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
      name: "Germany",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: germanyFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function germanyPage() {
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
      <GermanyLandingPage />
    </>
  );
}
