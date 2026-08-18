import MilfDatingLanding from "@/components/landing/MilfDatingLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import { milfDatingFaqs, milfDatingOffer } from "@/data/milfDatingOffers";

export const metadata: Metadata = {
  title: {
    absolute: "MilfFinder Dating | Mature Dating Online",
  },
  description:
    "Meet mature singles on MilfFinder — a worldwide mature dating platform for adults 18+. Browse profiles, message privately, and connect on your terms.",
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
    title: "MilfFinder Dating | Mature Dating Online",
    description:
      "Meet mature singles on MilfFinder — worldwide mature dating for adults 18+.",
    url: "https://www.thedatecompass.com/offers/milf-dating",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MilfFinder Dating | Mature Dating Online",
    description:
      "Meet mature singles on MilfFinder — worldwide mature dating for adults 18+.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MilfDatingPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <MilfDatingLanding />

      <FixedOfferCta
        offer={milfDatingOffer}
        placement="milf_dating_fixed_cta"
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
