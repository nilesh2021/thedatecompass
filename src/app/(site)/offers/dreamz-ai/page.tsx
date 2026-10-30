import AiGirlfriendLanding from "@/components/landing/AiGirlfriendLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import { aiGirlfriendFaqs, dreamzOffer } from "@/data/aiGirlfriendOffers";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/dreamz-ai")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "Dreamz.ai",
    "Dreamz AI",
    "AI companion",
    "AI girlfriend",
    "virtual girlfriend",
    "AI chat",
    "AI roleplay",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/dreamz-ai",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com/offers/dreamz-ai",
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

export default function AIGirlfriendPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">


      <AiGirlfriendLanding />

      <FixedOfferCta offer={dreamzOffer} placement="lp_end" />

      {/* Breadcrumb Schema */}
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
                item: "https://www.thedatecompass.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "AI Girlfriend",
                item: "https://www.thedatecompass.com/category/ai-girlfriend",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Dreamz.ai",
                item: "https://www.thedatecompass.com/offers/dreamz-ai",
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: aiGirlfriendFaqs.map((faq) => ({
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
    </div>
  );
}