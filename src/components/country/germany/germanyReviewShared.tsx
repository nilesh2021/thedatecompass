import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import type { CountryFaqItem } from "@/components/country/common/CountryFaqSection";
import UsaProviderReviewPage, {
  type ProviderReviewCountry,
} from "@/components/country/usa/UsaProviderReviewPage";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import { getBrandSeo, SITE_NAME } from "@/lib/pageSeo";
import {
  GERMANY_PAGE_LAST_UPDATED,
  germanyOffers,
  type GermanyOffer,
} from "@/data/germanyOffers";

const SITE_URL = "https://www.thedatecompass.com";

export const GERMANY_REVIEW_COUNTRY: ProviderReviewCountry = {
  slug: "germany",
  label: "Germany",
  lastUpdated: GERMANY_PAGE_LAST_UPDATED,
  inventoryLabel: "Germany inventory",
  audiencePhrase: "adults in Germany",
  backHref: "/germany",
  backLabel: "Back to Germany comparison",
  compareOtherLabel: "Compare other adult dating sites in Germany",
  safetyHref: "/germany#germany-dating-guide",
  safetyLabel: "Germany dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export function getGermanyReviewOffer(slug: string): GermanyOffer | undefined {
  return germanyOffers.find((entry) => entry.slug === slug);
}

export function germanyReviewPageUrl(slug: string): string {
  return `${SITE_URL}/germany/${slug}-review`;
}

export function buildGermanyReviewFaqs(offer: GermanyOffer): CountryFaqItem[] {
  return [
    {
      question: `Is ${offer.name} listed for visitors in Germany?`,
      answer: `Yes. ${offer.name} appears on our Germany comparison page in the ${offer.category} category for eligible adults 18+.`,
    },
    {
      question: `What category is ${offer.name} in on TheDateCompass?`,
      answer: `${offer.name} is categorized as ${offer.category.toLowerCase()} on the Germany comparison page.`,
    },
    {
      question: `What is ${offer.name}’s main focus in your data?`,
      answer: `Our Germany listing describes the focus as: ${offer.keyFocus}. Confirm live details on the provider site.`,
    },
    {
      question: `Does this page include ${offer.name} pricing?`,
      answer: `No. TheDateCompass does not publish pricing for ${offer.name}. Any fees or subscriptions are shown only on the provider’s website after you follow an outbound link.`,
    },
    {
      question: `What features does TheDateCompass mention for ${offer.name}?`,
      answer: `Listed points on our Germany page include: ${offer.points.join("; ")}. We have not independently verified each item on the live product.`,
    },
    {
      question: `How do I sign up for ${offer.name} from this site?`,
      answer: `Use the “Visit ${offer.name}” buttons on this page. They open the provider’s site in a new tab via our affiliate tracking link. Registration and account management happen entirely on that external platform.`,
    },
  ];
}

export function germanyReviewMetadata(slug: string, displayName: string): Metadata {
  const pageUrl = germanyReviewPageUrl(slug);
  const seo = getBrandSeo(`/germany/${slug}-review`);
  const title = seo?.title ?? `${displayName} Review – Germany | ${SITE_NAME}`;
  const description = seo?.description ?? `Read the ${displayName} review for visitors in Germany. See what this listing covers before you visit the provider site. Offers are third-party listings.`;
  const reviewReady =
    germanyOffers.find((entry) => entry.slug === slug)?.reviewReady ?? false;

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
      locale: seo?.locale ?? "en_US",
      type: "article",
      publishedTime: GERMANY_PAGE_LAST_UPDATED.iso,
      modifiedTime: GERMANY_PAGE_LAST_UPDATED.iso,
      images: [
        {
          url: getAbsoluteOfferImageUrl(slug, SITE_URL),
          width: 1200,
          height: 630,
          alt: `${displayName} adult dating listing for Germany visitors`,
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

export function GermanyReviewDocument({
  offer,
  faqs,
}: {
  offer: GermanyOffer;
  faqs: CountryFaqItem[];
}) {
  const pageUrl = germanyReviewPageUrl(offer.slug);
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
        name: "Germany",
        item: `${SITE_URL}/germany`,
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
    headline: getBrandSeo(`/germany/${offer.slug}-review`)?.headline ?? `${offer.name} Review – Germany`,
    description: getBrandSeo(`/germany/${offer.slug}-review`)?.description ?? `Read the ${offer.name} review for visitors in Germany.`,
    url: pageUrl,
    dateModified: GERMANY_PAGE_LAST_UPDATED.iso,
    datePublished: GERMANY_PAGE_LAST_UPDATED.iso,
    inLanguage: "en-DE",
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
          country={GERMANY_REVIEW_COUNTRY}
        />
        <Footer />
      </main>
    </>
  );
}
