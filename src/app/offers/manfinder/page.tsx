import ManFinderLanding from "@/components/landing/ManFinderLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import { manFinderFaqs, manFinderOffer } from "@/data/manFinderOffers";

export const metadata: Metadata = {
  title: {
    absolute: "ManFinder | Gay Dating | TheDateCompass",
  },
  description:
    "Explore ManFinder, a gay dating platform for men seeking casual encounters and real connections. Adults 18+.",
  keywords: [
    "ManFinder",
    "ManFinder dating",
    "gay dating",
    "gay dating sites",
    "men seeking men",
    "gay casual dating",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/manfinder",
  },
  openGraph: {
    title: "ManFinder | Gay Dating | TheDateCompass",
    description:
      "Explore ManFinder, a gay dating platform for men seeking casual encounters and real connections.",
    url: "https://www.thedatecompass.com/offers/manfinder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManFinder | Gay Dating | TheDateCompass",
    description: "Explore ManFinder and discover connections with other men.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ManFinderPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <ManFinderLanding />

      <FixedOfferCta
        offer={manFinderOffer}
        placement="manfinder_fixed_cta"
        ctaLabel="Join ManFinder Free →"
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
                name: "ManFinder",
                item: "https://www.thedatecompass.com/offers/manfinder",
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
            mainEntity: manFinderFaqs.map((faq) => ({
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
