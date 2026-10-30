import TransDateDatingLanding from "@/components/landing/TransDateDatingLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import { transDateFaqs, transDateOffer } from "@/data/transDateDatingOffers";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/transdate-dating")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "TransDate",
    "TransDate dating",
    "transgender dating",
    "trans dating sites",
    "inclusive dating",
    "worldwide dating",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/transdate-dating",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com/offers/transdate-dating",
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

export default function TransDateDatingPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">

      <TransDateDatingLanding />

      <FixedOfferCta
        offer={transDateOffer}
        placement="lp_end"
        ctaLabel="Join TransDate Free →"
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
                name: "Gay Dating",
                item: "https://www.thedatecompass.com/gay-dating",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "TransDate Dating",
                item: "https://www.thedatecompass.com/offers/transdate-dating",
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
            mainEntity: transDateFaqs.map((faq) => ({
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
