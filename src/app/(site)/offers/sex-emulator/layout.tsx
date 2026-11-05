import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonLd";
import { topicSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/offers/sex-emulator";
const seo = topicSeo(
  "Virtual Experience | TheDateCompass",
  "Explore an interactive virtual world where you create, customize, and discover an adult gaming experience listed on TheDateCompass.",
);

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "virtual experience",
    "adult gaming",
    "interactive virtual world",
    "virtual world",
    "adults 18+",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: seo.locale,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SexEmulatorOfferLayout({
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
          { name: "Sex Emulator", url: PAGE_URL },
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
