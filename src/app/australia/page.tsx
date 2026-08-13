import type { Metadata } from "next";
import AustraliaLandingPage from "@/components/country/australia/AustraliaLandingPage";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/australia`;
const OG_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80";

/**
 * Australia route metadata.
 */
export const metadata: Metadata = {
  title: "Adult Dating Platforms in Australia | Shortlist Guide",
  description:
    "Browse an Australia-focused shortlist of third-party adult dating and companion platforms. Compare casual, gay dating, mature, niche, and AI options before you visit a provider site.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Adult Dating Platforms in Australia | Shortlist Guide",
    description:
      "Compare third-party adult dating and companion listings for Australia visitors, with category links and a practical guide to shortlisting safely.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Australia dating offers comparison preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Platforms in Australia | Shortlist Guide",
    description:
      "Compare third-party adult dating and companion listings for Australia visitors, with category links and a practical guide to shortlisting safely.",
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

export default function AustraliaPage() {
  return <AustraliaLandingPage />;
}
