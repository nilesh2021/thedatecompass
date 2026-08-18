import GayDatingSitesLanding from "@/components/landing/GayDatingSitesLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import {
  gayDatingSitesFaqs,
  gayDatingSitesFeatured,
} from "@/data/gayDatingSitesOffers";

const PAGE_URL =
  "https://www.thedatecompass.com/offers/gay-dating-sites";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gay Dating Sites Compared | GayBloom & ManFinder | TheDateCompass",
  },
  description:
    "Compare top gay dating sites GayBloom and ManFinder. Review country availability, features, and signup options for men seeking men. Adults 18+.",
  keywords: [
    "gay dating sites",
    "best gay dating sites",
    "GayBloom",
    "ManFinder",
    "gay dating",
    "men seeking men",
    "LGBTQ dating",
    "gay dating USA",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Gay Dating Sites Compared | GayBloom & ManFinder | TheDateCompass",
    description:
      "Compare GayBloom and ManFinder gay dating offers — country coverage, features, and signup details for adults 18+.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gay dating sites comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gay Dating Sites Compared | GayBloom & ManFinder | TheDateCompass",
    description:
      "Compare GayBloom and ManFinder gay dating offers for men seeking men.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GayDatingSitesPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <GayDatingSitesLanding />

      <FixedOfferCta
        offer={gayDatingSitesFeatured}
        placement="gay_dating_sites_fixed_cta"
        ctaLabel={`Visit ${gayDatingSitesFeatured.name} →`}
      />

      {/* Breadcrumb Schema */}
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
                item: "https://www.thedatecompass.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Gay Dating",
                item: "https://www.thedatecompass.com/category/gay-dating",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Gay Dating Sites",
                item: PAGE_URL,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: gayDatingSitesFaqs.map((faq) => ({
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
    </div>
  );
}
