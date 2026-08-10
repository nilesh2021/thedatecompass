import AiGirlfriendLanding from "@/components/landing/AiGirlfriendLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import type { Metadata } from "next";
import { aiGirlfriendFaqs } from "@/data/aiGirlfriendOffers";

export const metadata: Metadata = {
  title: "Dreamz.ai AI Companion | TheDateCompass",
  description:
    "Explore Dreamz.ai, an AI companion platform with personalized personalities, private conversations, and roleplay experiences. Adults 18+.",
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
    title: "Dreamz.ai AI Companion | TheDateCompass",
    description:
      "Explore Dreamz.ai and discover personalized AI companions for conversation and roleplay.",
    url: "https://www.thedatecompass.com/offers/dreamz-ai",
    type: "website",
  },
};

export default function AIGirlfriendPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <AiGirlfriendLanding />

      <FixedOfferCta />

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