import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import NightOfferCard from "@/components/country/common/NightOfferCard";
import { denmarkOffers } from "@/data/countries/denmark";

const relatedCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/offers/realsexclub-denmark", label: "RealSexClub Denmark" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "🇺🇸" },
  { href: "/germany", label: "Germany", flag: "🇩🇪" },
  { href: "/france", label: "France", flag: "🇫🇷" },
  { href: "/canada", label: "Canada", flag: "🇨🇦" },
  { href: "/australia", label: "Australia", flag: "🇦🇺" },
  { href: "/uk", label: "United Kingdom", flag: "🇬🇧" },
] as const;

export const denmarkFaqs = [
  {
    question: "What dating sites are compared for Denmark?",
    answer:
      "This Denmark page compares third-party dating and adult dating offers by audience, dating focus, and listed features. RealSexClub is featured first, alongside casual, gay, mature, trans, and niche adult social listings. Choose an option based on the category and description that fit what you are looking for.",
  },
  {
    question: "Is RealSexClub available for Denmark visitors?",
    answer:
      "RealSexClub is listed here as an adult dating and social option for Denmark visitors comparing platforms. A listing on TheDateCompass does not guarantee the destination service is open in every city. Confirm eligibility and current terms on RealSexClub, or read our dedicated RealSexClub Denmark guide first.",
  },
  {
    question: "Which offers on this page focus on casual dating?",
    answer:
      "If you are looking for casual dating, look for platforms that describe casual encounters or adult dating — including DirtyDating and FuckFinder. Compare the category labels and bullet points on each offer before visiting a provider.",
  },
  {
    question: "Are there adult dating sites for different interests in Denmark?",
    answer:
      "Yes. Adult dating platforms can focus on different types of connections. Some offers are designed for casual dating, while others focus on gay dating, mature audiences, trans dating, or niche adult social spaces. Check each platform's description to find an option that matches what you are looking for.",
  },
  {
    question: "How do I choose a dating site in Denmark?",
    answer:
      "Consider the type of connection you want, the platform's target audience, available features, privacy options, and whether the service fits visitors in Copenhagen, Aarhus, Odense, Aalborg, or elsewhere in Denmark. Comparing several dating platforms before choosing one can help you find an option that suits your preferences.",
  },
  {
    question: "Are these dating platforms safe to use?",
    answer:
      "Online dating services have different privacy and safety features. Before using a platform, review its terms, privacy policy, community guidelines, and available safety controls. Avoid sharing sensitive personal or financial information with people you have not met or do not trust.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=80";

export default function DenmarkLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Denmark · Adults 18+"
      title={
        <>
          Find the{" "}
          <span className="font-serif-accent italic text-[#ff2d87]">spark</span>{" "}
          you want in Denmark.
        </>
      }
      lede="Casual dating, adult social spaces, gay dating, and mature matches — compared for Denmark visitors so you can skip the guesswork and click what fits."
      note="RealSexClub is the featured adult dating listing on this Denmark shortlist. Always confirm current terms on the destination site."
      ctaLabel="Compare now"
      image={heroImage}
      imageAlt="Adult dating lifestyle portrait for Denmark visitors"
      offerEyebrow="Denmark offers"
      offerTitle="Adult dating platforms compared"
      offerDescription="RealSexClub leads this Denmark shortlist, with casual, gay, mature, trans, and niche adult social options beside it — each card matches our live affiliate lineup."
      offerBanner={
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
          {[
            { label: "Platforms compared", value: `${denmarkOffers.length}` },
            { label: "Guide updated", value: "2026" },
            { label: "Audience", value: "Adults 18+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#ff2d87]/30 bg-[#0c1230]/70 p-4 text-center"
            >
              <p className="text-xl font-extrabold sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#ff2d87]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      }
      offers={denmarkOffers.map((offer) => (
        <NightOfferCard
          key={offer.name}
          name={offer.name.trim()}
          category={offer.category}
          points={offer.points}
          image={offer.image}
          href={offer.affiliateLink}
          country="denmark"
          detailHref={offer.guideHref}
          detailLabel={offer.guideLabel}
        />
      ))}
      disclaimer="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. All listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
      checklist={
        <>
          <li>
            <span className="font-semibold text-cream">Categories —</span> Match
            casual, gay dating, mature, or niche adult social listings to the
            experience you want.
          </li>
          <li>
            <span className="font-semibold text-cream">Audience fit —</span>{" "}
            Read who each offer says it is for before you invest time in signup.
          </li>
          <li>
            <span className="font-semibold text-cream">Privacy —</span> Check
            visibility settings and block/report tools on the destination site.
          </li>
          <li>
            <span className="font-semibold text-cream">Age and terms —</span>{" "}
            All offers here are for adults 18+. Confirm current terms and
            eligibility on the provider site before registering.
          </li>
        </>
      }
      faqEyebrow="FAQ · Denmark"
      faqTitle="Questions about dating offers for Denmark visitors"
      faqSubtitle="Clear answers about how this Denmark comparison page works."
      faqs={denmarkFaqs}
      guideId="denmark-dating-guide"
      guideEyebrow="Denmark dating guide"
      guideTitle="How to compare adult dating platforms in Denmark"
      guideDescription="A practical, neutral walkthrough for visitors shortlisting third-party options before signing up."
      guide={
        <>
          <p>
            This Denmark page is built for comparison, not for rushing into a
            signup. Visitors can scan third-party adult dating listings by
            category—casual dating, gay dating, mature audiences, and niche
            adult social spaces—before deciding whether to open a provider site.
            TheDateCompass presents those options with short descriptions and
            bullet points. We do not operate the platforms, host profiles, or
            handle payments and support.
          </p>
          <p>
            RealSexClub sits first because it is the featured adult dating and
            social listing for this Denmark shortlist. If that is the offer you
            came to evaluate, start there, then compare casual or niche cards
            only if you want a second option. Matching intention to category
            first usually makes the remaining cards easier to evaluate.
          </p>
          <p>
            Denmark visitors often browse from Copenhagen, Aarhus, Odense, or
            Aalborg. A listing on this page does not mean a destination site
            guarantees local profiles in every city. After you shortlist, click
            through only when a listing’s framing fits what you want. Every
            offer button opens an external site where signup rules, privacy
            settings, messaging tools, and any paid features are defined and can
            change.
          </p>
          <p>
            Treat this page as a comparison aid. The offers above are not ranked
            as winners, and this guide does not claim which option is most
            popular, cheapest, or right for every visitor. Use the cards and
            related category links to orient yourself, then verify live details
            on each destination site.
          </p>
        </>
      }
      extra={
        <p className="mt-8 rounded-2xl border border-[#ff2d87]/30 bg-[#141a3d] px-5 py-4 text-sm leading-relaxed text-cream/75">
          Want a deeper look at the featured offer? Read the{" "}
          <Link
            href="/offers/realsexclub-denmark"
            className="font-bold text-[#ff8aa8] underline decoration-[#ff2d87]/50 underline-offset-2 hover:text-white"
          >
            RealSexClub Denmark guide
          </Link>{" "}
          before you visit the destination site.
        </p>
      }
      categoriesId="denmark-related-categories"
      categoriesTitle="Explore dating categories in Denmark"
      categoriesDescription="Category pages and the RealSexClub Denmark guide that match the offers above."
      categories={[...relatedCategories]}
      countriesTitleId="denmark-other-countries"
      countries={[...otherCountries]}
    />
  );
}
