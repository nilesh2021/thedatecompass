import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonLd";
import { getBrandSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/offers/gonaughty-australia";
const seo = getBrandSeo("/offers/gonaughty-australia")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "dating sites Australia",
    "Australian dating sites",
    "online dating Australia",
    "casual dating Australia",
    "adult dating Australia",
    "meet singles in Australia",
    "GoNaughty",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: PAGE_URL,
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GoNaughtyAustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.thedatecompass.com" },
          { name: "Offers", url: "https://www.thedatecompass.com/top-offers" },
          { name: "GoNaughty Australia", url: PAGE_URL },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: seo.title,
          description: seo.description,
          url: PAGE_URL,
        })}
      />
      {children}
    </>
  );
}
