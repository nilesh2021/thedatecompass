import ManFinderLanding from "@/components/landing/ManFinderLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import { manFinderFaqs, manFinderOffer } from "@/data/manFinderOffers";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/manfinder")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
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
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com/offers/manfinder",
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ManFinderPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">

      <ManFinderLanding />

      <FixedOfferCta
        offer={manFinderOffer}
        placement="lp_end"
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
                item: "https://www.thedatecompass.com/gay-dating",
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
