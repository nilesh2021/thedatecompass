import CountryNightPage from "@/components/country/common/CountryNightPage";
import NightOfferCard from "@/components/country/common/NightOfferCard";
import { germanyOffers } from "@/data/germanyOffers";

const relatedCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/cozy-sites", label: "Cozy & niche sites" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "🇺🇸" },
  { href: "/france", label: "France", flag: "🇫🇷" },
  { href: "/canada", label: "Canada", flag: "🇨🇦" },
  { href: "/australia", label: "Australia", flag: "🇦🇺" },
  { href: "/uk", label: "United Kingdom", flag: "🇬🇧" },
] as const;

const germanyFaqs = [
  {
    question: "What dating sites are compared for Germany?",
    answer:
      "This Germany page compares third-party dating and adult dating offers by audience, dating focus, and listed features. Choose an option based on the category and description that fit what you are looking for.",
  },
  {
    question: "Which dating sites are listed for Germany visitors?",
    answer:
      "The offers on this page are third-party dating and adult dating platforms presented for visitors comparing options with a Germany focus. Always confirm eligibility and terms on the destination site.",
  },
  {
    question: "Which offers on this page focus on casual dating?",
    answer:
      "If you are looking for casual dating, look for platforms on this page that describe casual encounters or adult dating. Compare the category labels and bullet points on each offer before visiting a provider.",
  },
  {
    question: "Are there adult dating sites for different interests in Germany?",
    answer:
      "Yes. Adult dating platforms can focus on different types of connections and interests. Some offers are designed for casual dating, while others focus on specific communities, preferences, or alternative dating experiences. Check each platform's description to find an option that matches what you are looking for.",
  },
  {
    question: "How do I choose a dating site in Germany?",
    answer:
      "Consider the type of connection you want, the platform's target audience, available features, pricing, privacy options, and whether the service is available in Germany. Comparing several dating platforms before choosing one can help you find an option that suits your preferences.",
  },
  {
    question: "Are these dating platforms safe to use?",
    answer:
      "Online dating services have different privacy and safety features. Before using a platform, review its terms, privacy policy, community guidelines, and available safety controls. Avoid sharing sensitive personal or financial information with people you have not met or do not trust.",
  },
];

const heroImage =
  "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function GermanyLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Germany · Adults 18+"
      title={
        <>
          Find the <span className="font-serif-accent italic text-[#ff2d87]">spark</span> you
          want in Germany.
        </>
      }
      lede="Casual dating, niche communities, mature matches, and adult social spaces — compared side by side so you can skip the guesswork and click what fits."
      ctaLabel="Compare now"
      image={heroImage}
      imageAlt="Couple enjoying a date in Germany"
      offerEyebrow="Germany offers"
      offerTitle="Adult dating platforms compared"
      offerDescription="From DirtyDating and RealSexClub to niche picks like FetishPartner, Grannyhunter, and Manfinder — each offer below matches our live affiliate lineup."
      offerBanner={
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
          {[
            { label: "Platforms compared", value: `${germanyOffers.length}` },
            { label: "Guide updated", value: "2026" },
            { label: "Audience", value: "Adults 18+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#ff2d87]/30 bg-[#0c1230]/70 p-4 text-center">
              <p className="text-xl font-extrabold sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#ff2d87]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      }
      offers={germanyOffers.map((offer) => (
        <NightOfferCard
          key={offer.name}
          name={offer.name.trim()}
          category={offer.category}
          points={offer.points}
          image={offer.image}
          href={offer.affiliateLink}
          country="germany"
        />
      ))}
      disclaimer="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. All listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
      checklist={
        <>
          <li>
            <span className="font-semibold text-cream">Categories —</span> Match casual, gay
            dating, mature, or niche adult social listings to the experience you want.
          </li>
          <li>
            <span className="font-semibold text-cream">Audience fit —</span> Read who each offer
            says it is for before you invest time in signup.
          </li>
          <li>
            <span className="font-semibold text-cream">Privacy —</span> Check visibility settings
            and block/report tools on the destination site.
          </li>
          <li>
            <span className="font-semibold text-cream">Age and terms —</span> All offers here are
            for adults 18+. Confirm current terms and eligibility on the provider site before
            registering.
          </li>
        </>
      }
      faqEyebrow="FAQ · Germany"
      faqTitle="Questions about dating offers for Germany visitors"
      faqSubtitle="Clear answers about how this Germany comparison page works."
      faqs={germanyFaqs}
      guideId="germany-dating-guide"
      guideEyebrow="Germany dating guide"
      guideTitle="How to compare adult dating platforms in Germany"
      guideDescription="A practical, neutral walkthrough for visitors shortlisting third-party options before signing up."
      guide={
        <>
          <p>
            This Germany page is built for comparison, not for rushing into a signup. Visitors
            can scan third-party adult dating listings by category—casual dating, gay dating,
            mature audiences, and niche adult social spaces—before deciding whether to open a
            provider site. TheDateCompass presents those options with short descriptions and
            bullet points. We do not operate the platforms, host profiles, or handle payments and
            support.
          </p>
          <p>
            Start with intention. If you want low-pressure chats, focus on casual or adult dating
            cards. If you are looking for gay dating communities, mature connections, or
            fetish-oriented adult social spaces, use those category labels to narrow the list.
            Matching intention to category first usually makes the remaining cards easier to
            evaluate.
          </p>
          <p>
            After you shortlist, click through only when a listing’s framing fits what you want.
            Every offer button opens an external site where signup rules, privacy settings,
            messaging tools, and any paid features are defined and can change. Review the
            provider’s current terms and privacy policy, confirm age and eligibility requirements,
            and check how reporting or visibility controls work before you create an account.
          </p>
          <p>
            Treat this page as a comparison aid. The offers above are not ranked as winners, and
            this guide does not claim which option is most popular, cheapest, or right for every
            visitor. Use the cards and related category links to orient yourself, then verify live
            details on each destination site. Country links below open our other active regional
            shortlists if you want to compare how similar pages are organised elsewhere.
          </p>
        </>
      }
      categoriesId="germany-related-categories"
      categoriesTitle="Explore dating categories in Germany"
      categoriesDescription="Category pages that match the Germany offers above — gay dating, adult and mature dating, and niche sites."
      categories={[...relatedCategories]}
      countriesTitleId="germany-other-countries"
      countries={[...otherCountries]}
    />
  );
}
