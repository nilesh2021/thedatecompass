import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import FranceOfferCard from "@/components/country/france/FranceOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import {
  FRANCE_PAGE_LAST_UPDATED,
  franceFaqs,
  franceOffers,
} from "@/data/countries/france";

const franceCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/cozy-sites", label: "Cozy & niche sites" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "🇺🇸" },
  { href: "/germany", label: "Germany", flag: "🇩🇪" },
  { href: "/canada", label: "Canada", flag: "🇨🇦" },
  { href: "/australia", label: "Australia", flag: "🇦🇺" },
  { href: "/uk", label: "United Kingdom", flag: "🇬🇧" },
  { href: "/denmark", label: "Denmark", flag: "🇩🇰" },
] as const;

const howWeRankItems = [
  {
    title: "Availability in France",
    text: "Whether each platform is listed for visitors comparing options with a France focus.",
  },
  {
    title: "Category",
    text: "Mature, gay dating, adult dating, and niche adult social listings shown in our inventory.",
  },
  {
    title: "Public features",
    text: "Information providers share publicly about matching, chat, and signup.",
  },
  {
    title: "Privacy information",
    text: "We point you to each provider’s own privacy policy and data practices. We do not invent privacy scores.",
  },
  {
    title: "Pricing (where available)",
    text: "Free and paid options are set by the provider; we do not quote prices here.",
  },
  {
    title: "Usability",
    text: "How clearly a platform presents its purpose and next steps before you join.",
  },
];

const disclaimer =
  "TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site.";

export default function FranceLandingPage() {
  return (
    <CountryNightPage
      eyebrow="France · Adults 18+"
      title="Adult Dating Sites in France (2026)"
      subtitle="Dating offers for France visitors."
      lastUpdated={
        <>
          Last updated:{" "}
          <time dateTime={FRANCE_PAGE_LAST_UPDATED.iso}>
            {FRANCE_PAGE_LAST_UPDATED.label}
          </time>
        </>
      }
      lede="Browse mature dating, gay dating, adult dating, and niche adult social listings in a France-focused layout. TheDateCompass compares third-party options — we do not run these platforms."
      note="Use this page to compare categories and descriptions side by side. Confirm eligibility, privacy settings, and terms on each provider site before you register. Adults 18+ only."
      ctaLabel="Browse offers"
      image={franceOffers[0]?.image ?? "/images/ai-model.webp"}
      imageAlt="France dating offers preview"
      offerEyebrow="France offers"
      offerTitle="Four platforms to compare"
      offerDescription="A France-focused shortlist spanning mature dating, gay dating, adult dating, and niche adult social. Open any card to visit the third-party site."
      offers={franceOffers.map((offer) => (
        <FranceOfferCard key={offer.slug} offer={offer} />
      ))}
      afterOffers={
        <>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
            18+ only. TheDateCompass contains sponsored links. Selecting an
            offer redirects you to an independent third-party provider site.
          </p>
          <USAComparisonTable variant="france" franceOffers={franceOffers} />
        </>
      }
      methodology={
        <section
          id="how-we-rank"
          className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
              Our approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              How we rank these sites
            </h2>
            <p className="mt-5 max-w-2xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
              We organise publicly listed information so you can compare France-focused
              options in one place. We do not operate the dating services ourselves.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {howWeRankItems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-3xl border border-[#ff2d87]/25 bg-[#141a3d] p-6"
                >
                  <h3 className="text-xl font-extrabold tracking-tight text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream/55">
              For how we work with outbound links, see our{" "}
              <Link
                href="/affiliate-disclosure"
                className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline"
              >
                affiliate disclosure
              </Link>
              .
            </p>
          </div>
        </section>
      }
      disclaimer={disclaimer}
      checklistHeading="h2"
      checklist={
        <>
          <li>
            <span className="font-semibold text-cream">Categories —</span> Match gay dating,
            mature, adult dating, or adult social listings to the experience you actually want.
          </li>
          <li>
            <span className="font-semibold text-cream">Audience fit —</span> Read who each offer
            says it is for, then decide whether that audience aligns with your preferences.
          </li>
          <li>
            <span className="font-semibold text-cream">Privacy —</span> Check profile visibility,
            data policies, and controls for blocking or reporting before you share personal
            details.
          </li>
          <li>
            <span className="font-semibold text-cream">Communication features —</span> Confirm how
            messaging and matching work on the destination site.
          </li>
          <li>
            <span className="font-semibold text-cream">Age requirements —</span> All offers on this
            page are for adults 18+. Providers may set additional eligibility rules—verify them on
            the provider site.
          </li>
          <li>
            <span className="font-semibold text-cream">Destination terms —</span> Pricing,
            features, and policies can change. Always review the current terms and privacy policy
            on the external platform before registering.
          </li>
        </>
      }
      faqEyebrow="FAQ · France"
      faqTitle="Questions about dating offers for France visitors"
      faqSubtitle="Clear answers about how this France comparison page works and how to use the listings responsibly."
      faqs={franceFaqs}
      guideId="france-dating-guide"
      guideEyebrow="France dating guide"
      guideTitle="How to compare adult dating and social platforms in France"
      guideDescription="A practical, neutral walkthrough for visitors who want to shortlist third-party options before signing up."
      guide={
        <>
          <p>
            Finding an adult dating or social platform that fits your goals starts with clarity,
            not with rushing into signup. Visitors who land on this France page often want a
            single place to scan different connection styles—gay dating, mature audiences, adult
            dating, or niche adult social spaces—before deciding whether to leave for a provider
            site. TheDateCompass is built for that comparison step. We present third-party
            listings with category labels and short descriptions so you can orient yourself
            quickly. We do not run the platforms, manage profiles, or handle payments and support.
          </p>
          <p>
            A useful way to work through the shortlist is to begin with intention. Ask what kind
            of interaction you want right now. Some people prefer gay dating spaces, mature
            connections, adult dating, or adult social communities organised around specific
            interests. Matching your intention to a category first usually makes the rest of the
            comparison easier, because you can ignore offers that are simply aimed at a different
            experience.
          </p>
          <p>
            Once you have a category in mind, read each relevant card for tone and focus rather
            than treating every listing as interchangeable. Look at how the platform describes
            itself: is it framed around community matching, mature audiences, adult dating, or
            niche interests? Cross-check that framing against the related category pages linked
            from this France layout if you want a broader view of similar offer types. Those
            category pages are part of the same site and can help you understand how
            TheDateCompass groups adult dating options without requiring you to invent a ranking
            of your own.
          </p>
          <p>
            Comparison also means planning for what happens after you click through. Every offer
            button on this page opens an external site. Features, interface language options,
            moderation tools, and account rules live on the destination platform and can change
            over time. Before you create a profile, review the provider’s current terms, privacy
            policy, and any safety or community guidelines. Confirm that you meet age and
            eligibility requirements. If something is unclear—such as how messaging works, whether
            profiles are public, or how to report problems—look for that information on the
            provider site rather than assuming this summary page has every operational detail.
          </p>
          <p>
            Privacy and personal safety deserve the same attention as category fit. Prefer
            platforms that make it easy to control visibility, block or report users, and keep
            early conversations on-platform. Avoid sharing sensitive financial or identity
            information with people you have not met or do not trust. For any in-person meeting
            that might follow an online chat, choose public places and tell someone you trust
            about your plans. These habits apply whether you are browsing from France or
            elsewhere; they are practical safeguards, not a claim about any specific service’s
            safety record.
          </p>
          <p>
            Finally, treat this France page as a comparison aid rather than a substitute for your
            own judgment. The four offers below the hero are a curated shortlist from our catalog
            for this layout. They are not ranked as winners, and this guide does not assert which
            option is most popular, cheapest, or officially endorsed for every visitor. Use the
            cards to shortlist, use the category links to explore related themes, and use the
            destination sites to verify the details that matter for your situation. If you also
            want to see how similar shortlists are organised for other countries, the country
            links at the bottom of this page point to our other active country layouts.
          </p>
        </>
      }
      categoriesId="france-related-categories"
      categoriesTitle="Explore dating categories in France"
      categoriesDescription="Browse existing category pages that match the offer themes on this France shortlist."
      categories={[...franceCategories]}
      countriesTitleId="france-other-countries"
      countries={[...otherCountries]}
    />
  );
}
