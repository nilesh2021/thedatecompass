import type { Metadata } from "next";
import UKLandingPage from "@/components/country/uk/UKLandingPage";
import {
  UK_PAGE_LAST_UPDATED,
  ukFaqs,
  ukOffers,
  getUkReviewHref,
} from "@/data/countries/uk";
import { getHubSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/uk`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;
const hub = getHubSeo("uk")!;

/**
 * UK route metadata.
 */
export const metadata: Metadata = {
  title: { absolute: hub.title },
  description: hub.description,
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if a UK-language version of this page ships.
  },
  openGraph: {
    title: hub.title,
    description: hub.description,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: hub.locale,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "UK dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: hub.title,
    description: hub.description,
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

const META_DESCRIPTION = hub.description;

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: hub.headline,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: UK_PAGE_LAST_UPDATED.iso,
  isPartOf: { "@type": "WebSite", name: "TheDateCompass", url: SITE_URL },
  audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ukOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${getUkReviewHref(offer) ?? "/uk"}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "UK", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ukFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function UkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <UKLandingPage />
    </>
  );
}
