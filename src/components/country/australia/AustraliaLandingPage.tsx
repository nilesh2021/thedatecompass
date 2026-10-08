import CountryNightPage from "@/components/country/common/CountryNightPage";
import AustraliaOfferCard from "@/components/country/australia/AustraliaOfferCard";
import { australiaOffers } from "@/data/countries/australia";

const australiaCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/cozy-sites", label: "Cozy & niche sites" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "🇺🇸" },
  { href: "/germany", label: "Germany", flag: "🇩🇪" },
  { href: "/france", label: "France", flag: "🇫🇷" },
  { href: "/canada", label: "Canada", flag: "🇨🇦" },
  { href: "/uk", label: "United Kingdom", flag: "🇬🇧" },
] as const;

const australiaFaqs = [
  {
    question: "Why use this Australia dating comparison page?",
    answer:
      "It brings a set of third-party adult dating offers into one Australia-focused layout. You can review categories and short descriptions for the ten listings here, then visit a provider site if an option fits what you are looking for. TheDateCompass does not operate those services.",
  },
  {
    question: "Which offer types are included for Australia visitors?",
    answer:
      "The shortlist includes casual dating, gay dating, adult dating, mature dating, trans dating, and niche adult social. Category labels on the cards—and the related category links below—help you narrow by intention before leaving this page.",
  },
  {
    question: "Does TheDateCompass run Australian dating apps?",
    answer:
      "No. TheDateCompass is an independent comparison site only. We do not create member profiles, process payments, or provide customer support for the platforms listed. Each visit button opens an external third-party website.",
  },
  {
    question: "How should I approach the affiliate links on this page?",
    answer:
      "Treat them as paths to destinations you still need to evaluate. Read the card first, then check the provider’s signup flow, privacy settings, and terms. Links may be affiliate links. All listed services are intended for adults 18+ only.",
  },
  {
    question: "What should I confirm on the destination site?",
    answer:
      "Eligibility and age rules, privacy and community policies, and how chat or matching works today. Product details can change, so use the live provider pages as the source of truth before you register.",
  },
];

const disclaimer =
  "TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site.";

export default function AustraliaLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Australia · Adults 18+"
      title={
        <>
          Dating offers for{" "}
          <span className="font-serif-accent italic text-[#ff2d87]">Australia</span> visitors.
        </>
      }
      lede="An Australia-focused shortlist of third-party dating listings from our catalog. TheDateCompass compares options — we do not operate these platforms."
      note="Review categories and descriptions side by side, then confirm eligibility, privacy settings, and terms on each provider site. Adults 18+ only."
      ctaLabel="Browse offers"
      image={australiaOffers[0]?.image ?? "/images/ai-model.webp"}
      imageAlt="Australia dating offers preview"
      offerEyebrow="Australia offers"
      offerTitle="Ten platforms to compare"
      offerDescription="An Australia-focused shortlist spanning casual dating, gay dating, adult and mature dating, trans dating, and niche adult social. Open any card to visit the third-party site."
      offers={australiaOffers.map((offer) => (
        <AustraliaOfferCard key={offer.id} offer={offer} />
      ))}
      disclaimer={disclaimer}
      checklist={
        <>
          <li>
            <span className="font-semibold text-cream">Start with intention —</span> Casual dating,
            gay dating, mature, trans dating, and niche adult social products solve different
            needs—pick the category first.
          </li>
          <li>
            <span className="font-semibold text-cream">Audience fit —</span> Read who each offer
            says it is for and whether that matches the connections you want.
          </li>
          <li>
            <span className="font-semibold text-cream">Online-first practicality —</span> If
            distance or schedule means chat comes before meeting, check how messaging works on the
            destination site.
          </li>
          <li>
            <span className="font-semibold text-cream">Privacy —</span> Review visibility settings,
            data policies, and reporting tools before sharing personal information.
          </li>
          <li>
            <span className="font-semibold text-cream">Age requirements —</span> Listings on this
            page are for adults 18+. Providers may add further eligibility rules—confirm them on the
            provider site.
          </li>
          <li>
            <span className="font-semibold text-cream">Destination terms —</span> Features and
            policies can change. Always check the current terms and privacy policy before you
            register.
          </li>
        </>
      }
      faqEyebrow="FAQ · Australia"
      faqTitle="Questions about dating offers for Australia visitors"
      faqSubtitle="Direct answers about this Australia comparison page and how to use the listings carefully."
      faqs={australiaFaqs}
      guideId="australia-dating-guide"
      guideEyebrow="Australia dating guide"
      guideTitle="How to compare adult dating and social platforms in Australia"
      guideDescription="A calm, informational guide for visitors shortlisting third-party platforms before they sign up."
      guide={
        <>
          <p>
            Choosing an adult dating or social platform can feel noisy when every site promises a
            different experience. This Australia page is designed as a quiet comparison step: a
            shortlist of third-party listings with clear category labels so you can see whether an
            offer is aimed at casual dating, gay dating, mature audiences, trans dating, or niche
            adult social spaces. TheDateCompass only presents those options for comparison. We do
            not operate the platforms, manage accounts, or process payments and support requests.
          </p>
          <p>
            For many people browsing from Australia, online conversation is the first
            stage—sometimes because schedules are busy, sometimes because distance between cities
            makes digital contact more practical at the start. That is why intention matters before
            brand names. Decide whether you want low-pressure adult chats, a community-oriented
            dating space, mature connections, inclusive dating, or interest-based adult social
            browsing. Matching intention to category first usually removes half the noise.
          </p>
          <p>
            With a category in mind, read the remaining cards for framing rather than assuming
            every listing works the same way. Notice whether the copy emphasises flirty encounters,
            inclusive gay dating, mature preferences, or niche interests. If you want a wider view
            of how TheDateCompass groups similar themes, use the related category links on this
            Australia layout. Those pages help you explore offer types; they are not scoreboards
            and do not rank platforms against each other.
          </p>
          <p>
            When you click Visit, you leave this site for a third-party destination. Signup rules,
            profile tools, moderation features, and any paid upgrades are defined there and can
            change. Before you create an account, open the provider’s terms and privacy policy.
            Confirm that you meet age and eligibility requirements. If you care about how messaging
            works, whether profiles are public, or how to report problems, find those answers on
            the destination site instead of relying only on this summary.
          </p>
          <p>
            Keep privacy and personal judgment in the loop. Use platforms that make it
            straightforward to control visibility and to block or report accounts. Keep early
            conversations on-platform when possible. Never send money or sensitive documents to
            someone you have not met in a trusted context. If online chat later leads to meeting in
            person, choose a public place and let someone you trust know your plans. These are
            everyday precautions for adult online dating; they are not claims about any single
            service’s safety record.
          </p>
          <p>
            Use this Australia page as a shortlist tool, not as a final verdict. The ten offers
            above are curated for this layout and are not presented as winners. This guide does not
            say which platform is most popular, cheapest, or suitable for every visitor. Compare
            categories here, follow related links when you want more context, and verify live
            details on each destination site. Country links at the bottom of the page open our
            other active regional shortlists if you want to see how similar pages are organised
            elsewhere.
          </p>
        </>
      }
      categoriesId="australia-related-categories"
      categoriesTitle="Explore dating categories in Australia"
      categoriesDescription="Browse existing category pages that match the offer themes on this Australia shortlist."
      categories={[...australiaCategories]}
      countriesTitleId="australia-other-countries"
      countries={[...otherCountries]}
    />
  );
}
