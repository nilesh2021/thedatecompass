import GrannyHunterLandingV2 from "@/components/landing/GrannyHunterLandingV2";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import {
  grannyHunterFaqs,
  grannyHunterOffer,
} from "@/data/grannyHunterOffers";

const PAGE_URL = "https://www.thedatecompass.com/offers/grannyhunter-v2";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1200&q=80";

const TITLE = "GrannyHunter | Mature Dating for Experienced Singles";
const DESCRIPTION =
  "Meet experienced singles on GrannyHunter — a worldwide mature dating platform for adults 18+. Browse profiles, message privately, and connect on your terms.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "GrannyHunter",
    "GrannyHunter dating",
    "mature dating",
    "experienced singles",
    "mature dating online",
    "adult dating",
    "worldwide mature dating",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GrannyHunter mature dating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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

export default function GrannyHunterV2Page() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <GrannyHunterLandingV2 />

      <FixedOfferCta
        offer={grannyHunterOffer}
        placement="grannyhunter-v2_fixed_cta"
        ctaLabel="Join GrannyHunter Free →"
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
                name: "GrannyHunter",
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
            mainEntity: grannyHunterFaqs.map((faq) => ({
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
