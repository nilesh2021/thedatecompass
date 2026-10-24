import type { Metadata } from "next";
import AustraliaLandingPage from "@/components/country/australia/AustraliaLandingPage";
import AustraliaPopinClickTracker from "@/components/country/australia/AustraliaPopinClickTracker";
import AustraliaPopinConfig from "@/components/country/australia/AustraliaPopinConfig";
import {
  AUSTRALIA_PAGE_LAST_UPDATED,
  australiaFaqs,
  australiaOffers,
  getAustraliaReviewHref,
} from "@/data/countries/australia";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/australia`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

/**
 * Australia route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in Australia | Shortlist Guide",
  description:
    "Compare adult dating sites and platforms in Australia by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.",
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if an Australian-language version of this page ships.
  },
  openGraph: {
    title: "Adult Dating Platforms in Australia | Shortlist Guide",
    description:
      "Compare third-party adult dating and companion listings for Australia visitors, with category links and a practical guide to shortlisting safely.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Australia dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in Australia | Shortlist Guide",
    description:
      "Compare third-party adult dating and companion listings for Australia visitors, with category links and a practical guide to shortlisting safely.",
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
  "Compare adult dating sites and platforms in Australia by pricing, privacy, member base and ease of use. Independent 2026 guide for adults 18+.";

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in Australia (2026)",
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: AUSTRALIA_PAGE_LAST_UPDATED.iso,
  isPartOf: { "@type": "WebSite", name: "TheDateCompass", url: SITE_URL },
  audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: australiaOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${getAustraliaReviewHref(offer) ?? "/australia"}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Australia", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: australiaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AustraliaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AustraliaLandingPage />
      <AustraliaPopinClickTracker />
      <AustraliaPopinConfig />
    </>
  );
}
