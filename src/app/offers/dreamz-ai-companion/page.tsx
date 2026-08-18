import AiGirlfriendLandingV2 from "@/components/landing/AiGirlfriendLandingV2";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import { aiGirlfriendFaqs, dreamzOffer } from "@/data/aiGirlfriendOffers";

const PAGE_URL = "https://www.thedatecompass.com/offers/dreamz-ai-companion";

export const metadata: Metadata = {
  title: {
    absolute: "Dreamz.ai AI Companion | TheDateCompass",
  },
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
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dreamz.ai AI Companion | TheDateCompass",
    description:
      "Explore Dreamz.ai and discover personalized AI companions for conversation and roleplay.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamz.ai AI Companion | TheDateCompass",
    description:
      "Explore Dreamz.ai and discover personalized AI companions for conversation and roleplay.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIGirlfriendV2Page() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <AiGirlfriendLandingV2 />

      <FixedOfferCta offer={dreamzOffer} placement="dreamz-v2_fixed_cta" />

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
