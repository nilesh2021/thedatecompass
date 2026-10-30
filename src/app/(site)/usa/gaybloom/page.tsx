import type { Metadata } from "next";
import GayBloomUsaLanding from "@/components/landing/GayBloomUsaLanding";
import { gayBloomUsaFaqs } from "@/data/gayBloomUsa";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import { SITE_URL } from "@/lib/sitemap";
import { getBrandSeo } from "@/lib/pageSeo";

const PAGE_URL = `${SITE_URL}/usa/gaybloom`;
const OG_IMAGE = getAbsoluteOfferImageUrl("gaybloom", SITE_URL);
const seo = getBrandSeo("/usa/gaybloom")!;
const TITLE = seo.title;
const DESCRIPTION = seo.description;

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "GayBloom",
    "GayBloom USA",
    "gay dating USA",
    "gay dating sites USA",
    "USA gay dating",
    "LGBTQ dating USA",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GayBloom gay dating in the USA",
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

export default function GayBloomUsaPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <GayBloomUsaLanding />

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
                name: "USA",
                item: `${SITE_URL}/usa`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "GayBloom",
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
            mainEntity: gayBloomUsaFaqs.map((faq) => ({
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
