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
const SLUG = "realsexclub";
const PAGE_URL = `${SITE_URL}/usa/${SLUG}-review`;
const PAGE_TITLE = "RealSexClub Review 2026 | TheDateCompass";
const META_DESCRIPTION =
  "Independent RealSexClub overview for USA visitors: adult dating category, availability, listed focus areas, and what TheDateCompass does and does not cover before you visit the provider site.";

const offer = usaOffers.find((entry) => entry.slug === SLUG);

function findTabOffer(slug: string) {
  for (const tab of datingOfferTabs) {
    const match = tab.offers.find((entry) => entry.slug === slug);
    if (match) return match;
  }
  return undefined;
}

const tabOffer = findTabOffer(SLUG);

const realSexClubFaqs: CountryFaqItem[] = [
  {
    question: "Is RealSexClub listed for visitors in the United States?",
    answer:
      "Yes. In our USA inventory RealSexClub carries a “USA available” badge and is tagged for USA visitors alongside the adult dating category.",
  },
  {
    question: "What category is RealSexClub in on TheDateCompass?",
    answer:
      "RealSexClub is categorized as adult dating on the USA comparison page and appears in the Casual & Adult tab filter with other adult listings.",
  },
  {
    question: "What is RealSexClub’s main focus in your data?",
    answer:
      "Our USA listing describes the focus as direct adult social connections. The mature dating comparison also notes a large member base for adults seeking new connections with messaging and profile tools.",
  },
  {
    question: "Does this page include RealSexClub pricing?",
    answer:
      "No. TheDateCompass does not publish pricing for RealSexClub. Any fees or subscriptions are shown only on the provider’s website after you follow an outbound link.",
  },
  {
    question: "What features does TheDateCompass mention for RealSexClub?",
    answer:
      "In our mature dating comparison data the listed highlights are large community, active members, messaging tools, and mobile access. We have not independently verified each item on the live product.",
  },
  {
    question: "How do I sign up for RealSexClub from this site?",
    answer:
      "Use the “Visit RealSexClub” buttons on this page. They open the provider’s site in a new tab via our affiliate tracking link. Registration and account management happen entirely on that external platform.",
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
        alt: "RealSexClub adult dating listing for USA visitors",
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
      name: "RealSexClub Review",
      item: PAGE_URL,
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RealSexClub Review 2026",
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

export default function RealSexClubReviewPage() {
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
          faqs={realSexClubFaqs}
        />
        <Footer />
      </main>
    </>
  );
}
