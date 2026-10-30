import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import FreeOnlineDatingUsaSinglesLanding, {
  freeOnlineDatingUsaSinglesFaqs,
} from "@/components/landing/FreeOnlineDatingUsaSinglesLanding";
import { adultImages } from "@/data/adultOfferImages";
import { topicSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/free-online-dating-usa-singles`;
const OG_IMAGE = `${SITE_URL}${adultImages.alt}`;
const seo = topicSeo(
  "Free Online Dating in the USA for Singles | TheDateCompass",
  "Compare free-to-join and free-to-explore USA dating platforms for casual, gay, and mature connections, then visit a partner site.",
);
const PAGE_TITLE = seo.title;
const META_DESCRIPTION = seo.description;

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: META_DESCRIPTION,
  keywords: [
    "all dating sites in us free",
    "all dating sites in USA free",
    "free dating sites in the US",
    "free dating sites USA",
    "all free dating sites USA",
    "free online dating sites for singles USA",
    "dating sites for singles in USA free",
    "free online dating USA",
    "free online dating for singles",
    "free dating sites USA singles",
    "online dating USA",
    "free dating sites for singles",
    "USA singles dating",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Free online dating in the USA for singles",
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
  },
};

export default function FreeOnlineDatingUsaSinglesPage() {
  return (
    <>
      <Header />
      <main>
        <FreeOnlineDatingUsaSinglesLanding />
      </main>
      <Footer />

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
                name: "USA Dating Sites",
                item: `${SITE_URL}/usa`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Free Online Dating for Singles",
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
            mainEntity: freeOnlineDatingUsaSinglesFaqs.map((faq) => ({
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
    </>
  );
}
