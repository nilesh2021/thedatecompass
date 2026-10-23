import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import NightOfferCard from "@/components/country/common/NightOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import {
  GERMANY_PAGE_LAST_UPDATED,
  germanyFaqs,
  germanyOffers,
  getGermanyReviewHref,
} from "@/data/germanyOffers";

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
  { href: "/denmark", label: "Denmark", flag: "🇩🇰" },
] as const;

const howWeRankItems = [
  {
    title: "Availability in Germany",
    text: "Whether each platform is listed for visitors comparing options with a Germany focus.",
  },
  {
    title: "Category",
    text: "Casual, gay, mature, adult social, trans-inclusive, and niche listings shown in our inventory.",
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

const heroImage =
  "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function GermanyLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Germany · Adults 18+"
      title="Adult Dating Sites in Germany (2026)"
      subtitle="Find the spark you want in Germany."
      lastUpdated={
        <>
          Last updated:{" "}
          <time dateTime={GERMANY_PAGE_LAST_UPDATED.iso}>
            {GERMANY_PAGE_LAST_UPDATED.label}
          </time>
        </>
      }
      lede="Casual dating, niche communities, mature matches, and adult social spaces — compared side by side so you can skip the guesswork and click what fits."
      note="18+ only. TheDateCompass contains sponsored links. Selecting an offer redirects you to an independent third-party provider site."
      ctaLabel="Compare now"
      image={heroImage}
      imageAlt="Couple enjoying a date in Germany"
      offerEyebrow="Germany offers"
      offerTitle="Adult dating platforms compared"
      offerDescription="We compare each site on pricing, privacy, member base in Germany and ease of use."
      offerBanner={
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
          {[
            { label: "Platforms compared", value: `${germanyOffers.length}` },
            { label: "Guide updated", value: GERMANY_PAGE_LAST_UPDATED.label },
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
      offers={germanyOffers.map((offer) => {
        const reviewHref = getGermanyReviewHref(offer);
        return (
          <NightOfferCard
            key={offer.name}
            name={offer.name.trim()}
            category={offer.category}
            points={offer.points}
            image={offer.image}
            imageAlt={offer.imageAlt}
            href={offer.href}
            country="germany"
            detailHref={reviewHref ?? undefined}
            detailLabel={reviewHref ? "Read review" : undefined}
          />
        );
      })}
      afterOffers={
        <>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
            18+ only. TheDateCompass contains sponsored links. Selecting an
            offer redirects you to an independent third-party provider site.
          </p>
          <USAComparisonTable variant="germany" germanyOffers={germanyOffers} />
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
              We organise publicly listed information so you can compare Germany-focused
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
            niche adult social spaces, use those category labels to narrow the list.
            Matching intention to category first usually makes the remaining cards easier to
            evaluate. You can also compare the same brands on our{" "}
            <Link href="/usa" className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline">
              USA dating page
            </Link>{" "}
            and other country shortlists linked below.
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
            visitor. Use the cards, comparison table, and related category links to orient
            yourself, then verify live details on each destination site. Country links below open
            our other active regional shortlists if you want to compare how similar pages are
            organised elsewhere.
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
