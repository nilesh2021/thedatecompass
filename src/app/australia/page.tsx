import type { Metadata } from "next";
import Script from "next/script";
import AustraliaLandingPage from "@/components/country/australia/AustraliaLandingPage";
import AustraliaPopinClickTracker from "@/components/country/australia/AustraliaPopinClickTracker";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/australia`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;

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
  return (
    <>
      <AustraliaLandingPage />
      <AustraliaPopinClickTracker />
      <Script id="australia-popin-config" strategy="afterInteractive">
        {`var crakPopInParamsOverlay = {
url: 'https://t.datsk9.com/358917/8570/0?po=6456&aff_sub5=SF_006OG000004lmDN&aff_sub4=AT_0019',
decryptUrl: false,
contentType: 'overlay',
coverOverlay: true,
expireDays: 0.01
};`}
      </Script>
      <Script
        src="https://crxcra.com/popin/latest/affstitial-min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
