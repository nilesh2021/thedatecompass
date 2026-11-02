import SingleflirtLanding from "@/components/landing/SingleflirtLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import {
  singleflirtFaqs,
  singleflirtOffer,
  singleflirtVisuals,
} from "@/data/singleflirtOffers";

const PAGE_URL = "https://www.thedatecompass.com/offers/singleflirt";

const TITLE = "Singleflirt: Meet Singles Near You | TheDateCompass";

const DESCRIPTION =
  "Meet singles nearby on Singleflirt. Create a profile, send a message, and turn a spark into a real date tonight. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "Singleflirt",
    "online dating",
    "meet singles nearby",
    "local dating",
    "flirt online",
    "adult dating",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: singleflirtVisuals.wide,
        width: 1200,
        height: 630,
        alt: "Singleflirt online dating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [singleflirtVisuals.wide],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SingleflirtPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <SingleflirtLanding />

      <FixedOfferCta
        offer={singleflirtOffer}
        placement="lp_end"
        ctaLabel="Start flirting →"
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
                name: "Offers",
                item: "https://www.thedatecompass.com/top-offers",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Singleflirt",
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
            mainEntity: singleflirtFaqs.map((faq) => ({
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
