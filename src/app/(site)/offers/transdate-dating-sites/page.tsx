import type { Metadata } from "next";
import TransDateNorwayLanding from "@/components/landing/TransDateNorwayLanding";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/transdate-dating-sites")!;

const PAGE_URL =
  "https://www.thedatecompass.com/offers/transdate-dating-sites";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80";

const TITLE = seo.title;

const DESCRIPTION = seo.description;

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "TransDate",
    "TransDate dating sites",
    "transgender dating",
    "transgender dating sites",
    "transgender dating in Norway",
    "trans dating Norway",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: seo.locale,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "TransDate dating sites for Norway",
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
  },
};

export default function TransDateDatingSitesPage() {
  return (
    <div className="font-sans">

      <TransDateNorwayLanding />

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
                name: "TransDate Dating Sites",
                item: PAGE_URL,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
