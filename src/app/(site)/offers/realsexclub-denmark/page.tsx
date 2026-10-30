import type { Metadata } from "next";
import RealSexClubDenmarkLanding from "@/components/landing/RealSexClubDenmarkLanding";
import { realSexClubDenmarkFaqs } from "@/data/realSexClubDenmark";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import { getBrandSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/offers/realsexclub-denmark`;
const OG_IMAGE = getAbsoluteOfferImageUrl("realsexclub", SITE_URL);
const seo = getBrandSeo("/offers/realsexclub-denmark")!;
const PAGE_TITLE = seo.title;
const META_DESCRIPTION = seo.description;

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: META_DESCRIPTION,
  keywords: [
    "RealSexClub Denmark",
    "adult dating Denmark",
    "dating sites Denmark",
    "sex dating Denmark",
    "online dating Copenhagen",
    "RealSexClub",
    "adult dating Copenhagen",
    "Denmark adult dating sites",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE, 
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: seo.locale,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "RealSexClub adult dating in Denmark",
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

export default function RealSexClubDenmarkPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <RealSexClubDenmarkLanding />

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
                item: `${SITE_URL}/denmark`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "RealSexClub Denmark",
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
            mainEntity: realSexClubDenmarkFaqs.map((faq) => ({
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
