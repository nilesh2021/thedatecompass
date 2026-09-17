import type { Metadata } from "next";
import UKLandingPage from "@/components/country/uk/UKLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/uk`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

/**
 * UK route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in the UK | Compare Listings",
  description:
    "Compare third-party adult dating and companion platforms for UK visitors. Review casual, gay dating, mature, niche, and AI listings with a United Kingdom–focused guide.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Adult Dating Platforms in the UK | Compare Listings",
    description:
      "A UK-focused comparison of third-party adult dating and companion listings, with category links and practical guidance before you sign up.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "UK dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in the UK | Compare Listings",
    description:
      "A UK-focused comparison of third-party adult dating and companion listings, with category links and practical guidance before you sign up.",
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

export default function UkPage() {
  return <UKLandingPage />;
}
