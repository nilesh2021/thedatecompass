import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import type { CountryFaqItem } from "@/components/country/common/CountryFaqSection";
import UsaProviderReviewPage, {
  type ProviderReviewCountry,
} from "@/components/country/usa/UsaProviderReviewPage";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import {
  FRANCE_PAGE_LAST_UPDATED,
  franceOffers,
  type FranceOffer,
} from "@/data/countries/france";

const SITE_URL = "https://www.thedatecompass.com";

export const FRANCE_REVIEW_COUNTRY: ProviderReviewCountry = {
  slug: "france",
  label: "France",
  lastUpdated: FRANCE_PAGE_LAST_UPDATED,
  inventoryLabel: "France inventory",
  audiencePhrase: "adults in France",
  backHref: "/france",
  backLabel: "Back to France comparison",
  compareOtherLabel: "Compare other adult dating sites in France",
  safetyHref: "/france#france-dating-guide",
  safetyLabel: "France dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export function getFranceReviewOffer(slug: string): FranceOffer | undefined {
  return franceOffers.find((entry) => entry.slug === slug);
}

export function franceReviewPageUrl(slug: string): string {
  return `${SITE_URL}/france/${slug}-review`;
}

export function buildFranceReviewFaqs(offer: FranceOffer): CountryFaqItem[] {
  return [
    {
      question: `Is ${offer.name} listed for visitors in France?`,
      answer: `Yes. ${offer.name} appears on our France comparison page in the ${offer.category} category for eligible adults 18+.`,
    },
    {
      question: `What category is ${offer.name} in on TheDateCompass?`,
      answer: `${offer.name} is categorized as ${offer.category.toLowerCase()} on the France comparison page.`,
    },
    {
      question: `What is ${offer.name}’s main focus in your data?`,
      answer: `Our France listing describes the focus as: ${offer.keyFocus}. Confirm live details on the provider site.`,
    },
    {
      question: `Does this page include ${offer.name} pricing?`,
      answer: `No. TheDateCompass does not publish pricing for ${offer.name}. Any fees or subscriptions are shown only on the provider’s website after you follow an outbound link.`,
    },
    {
      question: `What features does TheDateCompass mention for ${offer.name}?`,
      answer: `Listed points on our France page include: ${offer.points.join("; ")}. We have not independently verified each item on the live product.`,
    },
    {
      question: `How do I sign up for ${offer.name} from this site?`,
      answer: `Use the “Visit ${offer.name}” buttons on this page. They open the provider’s site in a new tab via our affiliate tracking link. Registration and account management happen entirely on that external platform.`,
    },
  ];
}

export function franceReviewMetadata(slug: string, displayName: string): Metadata {
  const pageUrl = franceReviewPageUrl(slug);
  const title = `${displayName} Review 2026 | TheDateCompass`;
  const description = `Independent ${displayName} overview for France visitors: category, listed focus areas, and what TheDateCompass does and does not cover before you visit the provider site.`;
  const reviewReady =
    franceOffers.find((entry) => entry.slug === slug)?.reviewReady ?? false;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "TheDateCompass",
      locale: "en_FR",
      type: "article",
      publishedTime: FRANCE_PAGE_LAST_UPDATED.iso,
      modifiedTime: FRANCE_PAGE_LAST_UPDATED.iso,
      images: [
        {
          url: getAbsoluteOfferImageUrl(slug, SITE_URL),
          width: 1200,
          height: 630,
          alt: `${displayName} adult dating listing for France visitors`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getAbsoluteOfferImageUrl(slug, SITE_URL)],
    },
    robots: {
      index: reviewReady,
      follow: true,
      googleBot: {
        index: reviewReady,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function FranceReviewDocument({
  offer,
  faqs,
}: {
  offer: FranceOffer;
  faqs: CountryFaqItem[];
}) {
  const pageUrl = franceReviewPageUrl(offer.slug);
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
        name: "France",
        item: `${SITE_URL}/france`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${offer.name} Review`,
        item: pageUrl,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${offer.name} Review 2026`,
    description: `Independent ${offer.name} overview for France visitors.`,
    url: pageUrl,
    dateModified: FRANCE_PAGE_LAST_UPDATED.iso,
    datePublished: FRANCE_PAGE_LAST_UPDATED.iso,
    inLanguage: "en-FR",
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
      "@id": pageUrl,
    },
  };

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
            listedHighlights: offer.points,
          }}
          faqs={faqs}
          country={FRANCE_REVIEW_COUNTRY}
        />
        <Footer />
      </main>
    </>
  );
}
