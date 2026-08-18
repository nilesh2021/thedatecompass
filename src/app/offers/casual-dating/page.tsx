import Script from "next/script";

import CasualDatingLanding from "@/components/landing/CasualDatingLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import {
  casualDatingFaqs,
  casualDatingOffer,
} from "@/data/casualDatingOffers";

const PAGE_URL = "https://www.thedatecompass.com/offers/casual-dating";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1470225620780-d1e8cb453f3f?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: "Casual Dating Online | Find Local Connections",
  },
  description:
    "Meet people looking for casual connections on FuckFinder — browse local profiles, message privately, and connect on your terms. Worldwide. Adults 18+.",
  keywords: [
    "casual dating",
    "casual dating online",
    "local connections",
    "FuckFinder",
    "adult casual dating",
    "casual encounters",
    "meet people online",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Casual Dating Online | Find Local Connections",
    description:
      "Meet people looking for casual connections on FuckFinder — browse profiles, message privately, and connect worldwide.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Casual dating online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casual Dating Online | Find Local Connections",
    description:
      "Meet people looking for casual connections on FuckFinder — browse profiles and connect worldwide.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CasualDatingPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <CasualDatingLanding />

      <FixedOfferCta
        offer={casualDatingOffer}
        placement="casual_dating_fixed_cta"
        ctaLabel="Join FuckFinder Free →"
      />

      <Script id="fuckfinder-popup-config" strategy="afterInteractive">
        {`var ad_idzone = "3589177346",
ad_popup_fallback = false,
ad_popup_force = false;`}
      </Script>
      <Script
        src="https://a.magsrv.com/popup.js"
        strategy="afterInteractive"
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
                name: "Casual Dating",
                item: "https://www.thedatecompass.com/top-offers",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Casual Dating Online",
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
            mainEntity: casualDatingFaqs.map((faq) => ({
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
