import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import NightOfferCard from "@/components/country/common/NightOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import {
  DENMARK_PAGE_LAST_UPDATED,
  denmarkFaqs,
  denmarkOffers,
  getDenmarkReviewHref,
} from "@/data/countries/denmark";

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

const howWeRankItems = [
  { title: "Availability in Denmark", text: "Whether each platform is listed for visitors comparing options with a Denmark focus." },
  { title: "Category", text: "Casual, gay, mature, trans, adult social, and niche listings shown in our inventory." },
  { title: "Public features", text: "Information providers share publicly about matching, chat, and signup." },
  { title: "Privacy information", text: "We point you to each provider’s own privacy policy and data practices. We do not invent privacy scores." },
  { title: "Pricing (where available)", text: "Free and paid options are set by the provider; we do not quote prices here." },
  { title: "Usability", text: "How clearly a platform presents its purpose and next steps before you join." },
];

const heroImage =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=80";

export default function DenmarkLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Denmark · Adults 18+"
      title="Adult Dating Sites in Denmark (2026)"
      subtitle="Dating offers for Denmark visitors."
      lastUpdated={
        <>
          Last updated:{" "}
          <time dateTime={DENMARK_PAGE_LAST_UPDATED.iso}>{DENMARK_PAGE_LAST_UPDATED.label}</time>
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
            { label: "Guide updated", value: DENMARK_PAGE_LAST_UPDATED.label },
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
      offers={denmarkOffers.map((offer) => {
        const reviewHref = getDenmarkReviewHref(offer);
        return (
          <NightOfferCard
            key={offer.slug}
            name={offer.name.trim()}
            category={offer.category}
            points={offer.points}
            image={offer.image}
            imageAlt={offer.imageAlt}
            href={offer.href}
            country="denmark"
            detailHref={reviewHref ?? undefined}
            detailLabel={reviewHref ? "Read review" : undefined}
            secondaryDetailHref={offer.guideHref}
            secondaryDetailLabel={offer.guideLabel}
          />
        );
      })}
      afterOffers={
        <>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
            18+ only. TheDateCompass contains sponsored links. Selecting an offer redirects you to an independent third-party provider site.
          </p>
          <USAComparisonTable variant="denmark" denmarkOffers={denmarkOffers} />
        </>
      }
      methodology={
        <section id="how-we-rank" className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">Our approach</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">How we rank these sites</h2>
            <p className="mt-5 max-w-2xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
              We organise publicly listed information so you can compare Denmark-focused options in one place. We do not operate the dating services ourselves.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {howWeRankItems.map((item) => (
                <li key={item.title} className="rounded-3xl border border-[#ff2d87]/25 bg-[#141a3d] p-6">
                  <h3 className="text-xl font-extrabold tracking-tight text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream/55">
              For how we work with outbound links, see our{" "}
              <Link href="/affiliate-disclosure" className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline">affiliate disclosure</Link>.
            </p>
          </div>
        </section>
      }
      disclaimer="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. All listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
      checklistHeading="h2"
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
