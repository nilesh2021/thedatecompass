import MilfDatingLanding from "@/components/landing/MilfDatingLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import { milfDatingFaqs, milfDatingOffer } from "@/data/milfDatingOffers";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/milf-dating")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "MilfFinder",
    "MilfFinder dating",
    "mature dating",
    "mature dating online",
    "mature singles",
    "adult dating",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/milf-dating",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com/offers/milf-dating",
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

export default function MilfDatingPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">

      <MilfDatingLanding />

      <FixedOfferCta
        offer={milfDatingOffer}
        placement="lp_end"
        ctaLabel="Join MilfFinder Free →"
      />

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
                name: "Mature Dating",
                item: "https://www.thedatecompass.com/top-offers/mature",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "MilfFinder Dating",
                item: "https://www.thedatecompass.com/offers/milf-dating",
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
            mainEntity: milfDatingFaqs.map((faq) => ({
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
