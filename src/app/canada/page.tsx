import type { Metadata } from "next";
import CanadaLandingPage from "@/components/country/canada/CanadaLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/canada`;
const OG_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80";

/**
 * Canada route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in Canada | Compare Offers",
  description:
    "Compare third-party adult dating and companion platforms for Canada visitors. Browse casual, gay dating, mature, niche, and AI listings with a practical shortlist guide.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Adult Dating Platforms in Canada | Compare Offers",
    description:
      "A Canada-focused shortlist of third-party adult dating and companion options, with category links and guidance for comparing before you sign up.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Canada dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in Canada | Compare Offers",
    description:
      "A Canada-focused shortlist of third-party adult dating and companion options, with category links and guidance for comparing before you sign up.",
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

export default function CanadaPage() {
  return <CanadaLandingPage />;
}
