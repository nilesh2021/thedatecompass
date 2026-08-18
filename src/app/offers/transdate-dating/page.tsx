import TransDateDatingLanding from "@/components/landing/TransDateDatingLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import { transDateFaqs, transDateOffer } from "@/data/transDateDatingOffers";

export const metadata: Metadata = {
  title: {
    absolute: "TransDate Dating | Worldwide Online Dating",
  },
  description:
    "Explore TransDate, an inclusive online dating platform for transgender dating and meaningful connections. Available worldwide. Adults 18+.",
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
    title: "TransDate Dating | Worldwide Online Dating",
    description:
      "Explore TransDate — an inclusive platform for transgender dating and meaningful connections, available worldwide.",
    url: "https://www.thedatecompass.com/offers/transdate-dating",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TransDate Dating | Worldwide Online Dating",
    description:
      "Explore TransDate and discover inclusive connections worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TransDateDatingPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <TransDateDatingLanding />

      <FixedOfferCta
        offer={transDateOffer}
        placement="transdate_dating_fixed_cta"
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
