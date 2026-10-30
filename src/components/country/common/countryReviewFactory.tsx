import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import type { CountryFaqItem } from "@/components/country/common/CountryFaqSection";
import UsaProviderReviewPage, {
  type ProviderReviewCountry,
  type ProviderReviewOffer,
} from "@/components/country/usa/UsaProviderReviewPage";
import { getAbsoluteOfferImageUrl } from "@/data/adultOfferImages";
import { getBrandSeo, ogLocaleForCountry, SITE_NAME } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";

type ReviewOffer = ProviderReviewOffer & {
  slug: string;
  points: string[];
  keyFocus: string;
  reviewReady: boolean;
};

export function createCountryReviewKit<T extends ReviewOffer>(config: {
  country: ProviderReviewCountry;
  locale: "en_CA" | "en_AU" | "en_GB" | "en_US";
  inLanguage: "en-CA" | "en-AU" | "en-GB" | "en-DK";
  offers: T[];
  hubPath: string;
}) {
  function getOffer(slug: string): T | undefined {
    return config.offers.find((entry) => entry.slug === slug);
  }

  function pageUrl(slug: string): string {
    return `${SITE_URL}${config.hubPath}/${slug}-review`;
  }

  function buildFaqs(offer: T): CountryFaqItem[] {
    return [
      {
        question: `Is ${offer.name} listed for visitors in ${config.country.label}?`,
        answer: `Yes. ${offer.name} appears on our ${config.country.label} comparison page in the ${offer.category} category for eligible adults 18+.`,
      },
      {
        question: `What category is ${offer.name} in on TheDateCompass?`,
        answer: `${offer.name} is categorized as ${offer.category.toLowerCase()} on the ${config.country.label} comparison page.`,
      },
      {
        question: `What is ${offer.name}’s main focus in your data?`,
        answer: `Our ${config.country.label} listing describes the focus as: ${offer.keyFocus}. Confirm live details on the provider site.`,
      },
      {
        question: `Does this page include ${offer.name} pricing?`,
        answer: `No. TheDateCompass does not publish pricing for ${offer.name}. Any fees or subscriptions are shown only on the provider’s website after you follow an outbound link.`,
      },
      {
        question: `What features does TheDateCompass mention for ${offer.name}?`,
        answer: `Listed points on our ${config.country.label} page include: ${offer.points.join("; ")}. We have not independently verified each item on the live product.`,
      },
      {
        question: `How do I sign up for ${offer.name} from this site?`,
        answer: `Use the “Visit ${offer.name}” buttons on this page. They open the provider’s site in a new tab via our affiliate tracking link. Registration and account management happen entirely on that external platform.`,
      },
    ];
  }

  function metadata(slug: string, displayName: string): Metadata {
    const url = pageUrl(slug);
    const seo = getBrandSeo(`${config.hubPath}/${slug}-review`);
    const title = seo?.title ?? `${displayName} Review – ${config.country.label} | ${SITE_NAME}`;
    const description = seo?.description ?? `Read the ${displayName} review for visitors in ${config.country.label}. See what this listing covers before you visit the provider site. Offers are third-party listings.`;
    const reviewReady = getOffer(slug)?.reviewReady ?? false;

    return {
      title: { absolute: title },
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        siteName: "TheDateCompass",
        locale: ogLocaleForCountry(config.country.slug),
        type: "article",
        publishedTime: config.country.lastUpdated.iso,
        modifiedTime: config.country.lastUpdated.iso,
        images: [
          {
            url: getAbsoluteOfferImageUrl(slug, SITE_URL),
            width: 1200,
            height: 630,
            alt: `${displayName} adult dating listing for ${config.country.label} visitors`,
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

  function Document({ offer, faqs }: { offer: T; faqs: CountryFaqItem[] }) {
    const url = pageUrl(offer.slug);
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: config.country.label, item: `${SITE_URL}${config.hubPath}` },
        { "@type": "ListItem", position: 3, name: `${offer.name} Review`, item: url },
      ],
    };
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: getBrandSeo(`${config.hubPath}/${offer.slug}-review`)?.headline ?? `${offer.name} Review – ${config.country.label}`,
      description: getBrandSeo(`${config.hubPath}/${offer.slug}-review`)?.description ?? `Read the ${offer.name} review for visitors in ${config.country.label}.`,
      url,
      dateModified: config.country.lastUpdated.iso,
      datePublished: config.country.lastUpdated.iso,
      inLanguage: config.inLanguage,
      author: { "@type": "Organization", name: "TheDateCompass", url: SITE_URL },
      publisher: { "@type": "Organization", name: "TheDateCompass", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <Header />
        <main className="min-h-screen bg-ink text-white antialiased selection:bg-brand-rose/40 selection:text-white">
          <UsaProviderReviewPage
            offer={offer}
            extras={{ listedHighlights: offer.points }}
            faqs={faqs}
            country={config.country}
          />
          <Footer />
        </main>
      </>
    );
  }

  return { getOffer, buildFaqs, metadata, Document };
}
