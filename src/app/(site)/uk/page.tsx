import type { Metadata } from "next";
import UKLandingPage from "@/components/country/uk/UKLandingPage";
import {
  UK_PAGE_LAST_UPDATED,
  ukFaqs,
  ukOffers,
  getUkReviewHref,
} from "@/data/countries/uk";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/uk`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

/**
 * UK route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in the UK | Compare Listings",
  description:
    "Compare adult dating sites and platforms in the UK by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.",
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if a UK-language version of this page ships.
  },
  openGraph: {
    title: "Adult Dating Platforms in the UK | Compare Listings",
    description:
      "A UK-focused comparison of third-party adult dating and companion listings, with category links and practical guidance before you sign up.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_GB",
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
    title: "Adult Dating Platforms in the UK | Compare Listings",
    description:
      "A UK-focused comparison of third-party adult dating and companion listings, with category links and practical guidance before you sign up.",
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
  "Compare adult dating sites and platforms in the UK by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.";

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in the UK (2026)",
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
