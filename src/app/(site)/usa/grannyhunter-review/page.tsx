import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import UsaProviderReviewPage from "@/components/country/usa/UsaProviderReviewPage";
import type { CountryFaqItem } from "@/components/country/common/CountryFaqSection";
import { datingOfferTabs } from "@/data/datingOffersTabs";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import { USA_PAGE_LAST_UPDATED, usaOffers } from "@/data/usaOffers";

const SITE_URL = "https://www.thedatecompass.com";
const SLUG = "grannyhunter";
const PAGE_URL = `${SITE_URL}/usa/${SLUG}-review`;
const PAGE_TITLE = "Grannyhunter Review 2026 | TheDateCompass";
const META_DESCRIPTION =
  "Independent Grannyhunter overview for USA visitors: mature dating category, availability, listed focus areas, and what TheDateCompass does and does not cover before you visit the provider site.";

const offer = usaOffers.find((entry) => entry.slug === SLUG);

function findTabOffer(slug: string) {
  for (const tab of datingOfferTabs) {
    const match = tab.offers.find((entry) => entry.slug === slug);
    if (match) return match;
  }
  return undefined;
}

const tabOffer = findTabOffer(SLUG);

const grannyhunterFaqs: CountryFaqItem[] = [
  {
    question: "Is Grannyhunter listed for visitors in the United States?",
    answer:
      "Yes. In our USA inventory Grannyhunter carries a “USA available” badge and is tagged for USA visitors alongside the mature dating category.",
  },
  {
    question: "What category is Grannyhunter in on TheDateCompass?",
    answer:
      "Grannyhunter is categorized as mature dating on the USA comparison page and appears in the Mature tab filter with other mature listings.",
  },
  {
    question: "What is Grannyhunter’s main focus in your data?",
    answer:
      "Our USA listing describes the focus as mature connections and age-specific preferences. The description notes mature dating focused on age-specific preferences and connections with experienced adults.",
  },
  {
    question: "Does this page include Grannyhunter pricing?",
    answer:
      "No. TheDateCompass does not publish pricing for Grannyhunter. Any fees or subscriptions are shown only on the provider’s website after you follow an outbound link.",
  },
  {
    question: "What features does TheDateCompass mention for Grannyhunter?",
    answer:
      "TheDateCompass does not list separate feature highlights for Grannyhunter in the dating comparison tabs. Our USA inventory describes the listing by category (mature dating) and focus (mature connections and age-specific preferences) only. We have not independently verified product features on the live site.",
  },
  {
    question: "How do I sign up for Grannyhunter from this site?",
    answer:
      "Use the “Visit Grannyhunter” buttons on this page. They open the provider’s site in a new tab via our affiliate tracking link. Registration and account management happen entirely on that external platform.",
  },
];

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "article",
    publishedTime: USA_PAGE_LAST_UPDATED.iso,
    modifiedTime: USA_PAGE_LAST_UPDATED.iso,
    images: [
      {
        url: getAbsoluteOfferImageUrl(SLUG, SITE_URL),
        width: 1200,
        height: 630,
        alt: "Grannyhunter mature dating listing for USA visitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    images: [getAbsoluteOfferImageUrl(SLUG, SITE_URL)],
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

const breadcrumbJsonLd = {
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
      name: "Grannyhunter Review",
      item: PAGE_URL,
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Grannyhunter Review 2026",
  description: META_DESCRIPTION,
  url: PAGE_URL,
  dateModified: USA_PAGE_LAST_UPDATED.iso,
  datePublished: USA_PAGE_LAST_UPDATED.iso,
  inLanguage: "en-US",
  author: {
    "@type": "Organization",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
};

export default function GrannyhunterReviewPage() {
  if (!offer) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Header />
      <main className="min-h-screen bg-ink text-white antialiased selection:bg-brand-rose/40 selection:text-white">
        <UsaProviderReviewPage
          offer={offer}
          extras={{
            tabBestFor: tabOffer?.bestFor,
            tabDescription: tabOffer?.description,
            listedHighlights: tabOffer?.highlights,
          }}
          faqs={grannyhunterFaqs}
        />
        <Footer />
      </main>
    </>
  );
}
