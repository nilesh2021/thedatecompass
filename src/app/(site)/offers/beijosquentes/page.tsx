import BeijosQuentesLanding from "@/components/landing/BeijosQuentesLanding";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import {
  beijosquentesFaqs,
  beijosquentesVisuals,
} from "@/data/beijosquentesOffers";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/offers/beijosquentes";

const TITLE = "BeijosQuentes: A Hello Worth a Kiss | TheDateCompass";

const DESCRIPTION =
  "Romantic dating for adults. Create a profile, send a warmer hello, and turn a spark into a real date on BeijosQuentes. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "BeijosQuentes",
    "romantic dating",
    "online dating",
    "meet singles",
    "flirty chat",
    "adults 18+",
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
        url: beijosquentesVisuals.hero,
        width: 1200,
        height: 630,
        alt: "BeijosQuentes romantic dating for adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [beijosquentesVisuals.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BeijosQuentesPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <BeijosQuentesLanding />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "BeijosQuentes", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: beijosquentesFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: PAGE_URL,
          isPartOf: {
            "@type": "WebSite",
            name: "TheDateCompass",
            url: "https://www.thedatecompass.com",
          },
        }}
      />
    </div>
  );
}
