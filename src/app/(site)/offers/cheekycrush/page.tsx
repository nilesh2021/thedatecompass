import CheekyCrushLanding from "@/components/landing/CheekyCrushLanding";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { cheekycrushVisuals } from "@/data/cheekycrushOffers";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const PAGE_URL = "https://www.thedatecompass.com/offers/cheekycrush";

const TITLE = "CheekyCrush: Finally, Dates Worth Your Time | TheDateCompass";

const DESCRIPTION =
  "Playful casual dating for adults in the USA. Confirm you are 18 or older, then continue to CheekyCrush. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "CheekyCrush",
    "casual dating",
    "USA dating",
    "flirty chat",
    "online dating",
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
        url: cheekycrushVisuals.hero,
        width: 1200,
        height: 630,
        alt: "CheekyCrush casual dating for USA adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [cheekycrushVisuals.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CheekyCrushPage() {
  return (
    <div className="font-sans">
      <CheekyCrushLanding />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "CheekyCrush", url: PAGE_URL },
        ])}
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
