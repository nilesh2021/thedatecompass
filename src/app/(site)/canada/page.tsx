import type { Metadata } from "next";
import CanadaLandingPage from "@/components/country/canada/CanadaLandingPage";
import {
  CANADA_PAGE_LAST_UPDATED,
  canadaFaqs,
  canadaOffers,
  getCanadaReviewHref,
} from "@/data/countries/canada";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/canada`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

/**
 * Canada route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in Canada | Compare Offers",
  description:
    "Compare adult dating sites and platforms in Canada by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.",
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if a Canadian-language version of this page ships.
  },
  openGraph: {
    title: "Adult Dating Platforms in Canada | Compare Offers",
    description:
      "A Canada-focused shortlist of third-party adult dating and companion options, with category links and guidance for comparing before you sign up.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Canada dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in Canada | Compare Offers",
    description:
      "A Canada-focused shortlist of third-party adult dating and companion options, with category links and guidance for comparing before you sign up.",
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
  "Compare adult dating sites and platforms in Canada by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.";

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in Canada (2026)",
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: CANADA_PAGE_LAST_UPDATED.iso,
  isPartOf: { "@type": "WebSite", name: "TheDateCompass", url: SITE_URL },
  audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: canadaOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${getCanadaReviewHref(offer) ?? "/canada"}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Canada", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: canadaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CanadaLandingPage />
    </>
  );
}
