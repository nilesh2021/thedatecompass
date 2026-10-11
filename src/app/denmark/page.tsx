import type { Metadata } from "next";
import DenmarkLandingPage, {
  denmarkFaqs,
} from "@/components/country/denmark/DenmarkLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/denmark`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;
const PAGE_TITLE = "Adult Dating Sites in Denmark 2026 | Compare Offers";
const META_DESCRIPTION =
  "Compare adult dating sites in Denmark. Browse RealSexClub and other casual, gay, mature, and niche listings for Copenhagen and across Denmark. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: META_DESCRIPTION,
  keywords: [
    "adult dating Denmark",
    "dating sites Denmark",
    "RealSexClub Denmark",
    "online dating Copenhagen",
    "casual dating Denmark",
    "adult dating sites Denmark",
    "Denmark dating sites",
    "online dating Denmark",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_DK",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Adult dating offers comparison for Denmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
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

export default function DenmarkPage() {
  return (
    <>
      <DenmarkLandingPage />

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
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Denmark",
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
            mainEntity: denmarkFaqs.map((faq) => ({
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
    </>
  );
}
