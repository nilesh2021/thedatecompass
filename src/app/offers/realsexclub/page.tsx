import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const PAGE_URL = "https://www.thedatecompass.com/offers/realsexclub";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80";

const TITLE = "RealSexClub Adult Dating Listing | TheDateCompass";
const DESCRIPTION =
  "Read a neutral RealSexClub overview for adult dating and social connections. Adults 18+. Affiliate listing with current terms on the destination site.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "RealSexClub",
    "adult dating",
    "adult social",
    "adult dating listing",
    "TheDateCompass",
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
        alt: "RealSexClub adult dating listing",
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

export default function RealSexClubOfferPage() {
  const data = getOfferPageData("realsexclub");

  return (
    <div className="pb-24 font-sans lg:pb-0">{
      data ? <OfferLandingPage data={data} /> : null
    }

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
                name: "Top Offers",
                item: "https://www.thedatecompass.com/top-offers",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "RealSexClub",
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
            mainEntity: (getOfferPageData("realsexclub")?.faqs || []).map((faq: any) => ({
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
