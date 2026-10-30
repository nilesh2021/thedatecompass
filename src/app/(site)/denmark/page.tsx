import type { Metadata } from "next";
import DenmarkLandingPage from "@/components/country/denmark/DenmarkLandingPage";
import {
  DENMARK_PAGE_LAST_UPDATED,
  denmarkFaqs,
  denmarkOffers,
  getDenmarkReviewHref,
} from "@/data/countries/denmark";
import { getHubSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/denmark`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;
const hub = getHubSeo("denmark")!;
const PAGE_TITLE = hub.title;
const META_DESCRIPTION = hub.description;

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: META_DESCRIPTION,
  keywords: [
    "adult dating Denmark",
    "dating sites Denmark",
    "RealSexClub Denmark",
    "online dating Copenhagen",
    "casual dating Denmark",
    "adult dating sites Denmark",
    "Denmark dating sites",
    "online dating Denmark",
  ],
  alternates: {
    canonical: PAGE_URL,
    // TODO: Add hreflang only if a Danish-language version of this page ships.
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
        alt: "Adult dating offers comparison for Denmark",
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
  dateModified: DENMARK_PAGE_LAST_UPDATED.iso,
  isPartOf: { "@type": "WebSite", name: "TheDateCompass", url: SITE_URL },
  audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: denmarkOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: `${SITE_URL}${getDenmarkReviewHref(offer) ?? "/denmark"}`,
    })),
  },
};

export default function DenmarkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <DenmarkLandingPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Denmark",
                item: PAGE_URL,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: denmarkFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
