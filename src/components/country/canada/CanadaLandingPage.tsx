import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import CanadaOfferCard from "@/components/country/canada/CanadaOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import {
  CANADA_PAGE_LAST_UPDATED,
  canadaFaqs,
  canadaOffers,
} from "@/data/countries/canada";

const canadaCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/cozy-sites", label: "Cozy & niche sites" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "🇺🇸" },
  { href: "/germany", label: "Germany", flag: "🇩🇪" },
  { href: "/france", label: "France", flag: "🇫🇷" },
  { href: "/australia", label: "Australia", flag: "🇦🇺" },
  { href: "/uk", label: "United Kingdom", flag: "🇬🇧" },
  { href: "/denmark", label: "Denmark", flag: "🇩🇰" },
] as const;

const howWeRankItems = [
  { title: "Availability in Canada", text: "Whether each platform is listed for visitors comparing options with a Canada focus." },
  { title: "Category", text: "Casual, gay, mature, trans, adult social, and niche listings shown in our inventory." },
  { title: "Public features", text: "Information providers share publicly about matching, chat, and signup." },
  { title: "Privacy information", text: "We point you to each provider’s own privacy policy and data practices. We do not invent privacy scores." },
  { title: "Pricing (where available)", text: "Free and paid options are set by the provider; we do not quote prices here." },
  { title: "Usability", text: "How clearly a platform presents its purpose and next steps before you join." },
];

const disclaimer =
  "TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site.";

export default function CanadaLandingPage() {
  const preview =
    canadaOffers.find((offer) => offer.image.startsWith("http"))?.image ??
    canadaOffers[0].image;

  return (
    <CountryNightPage
      eyebrow="Canada · Adults 18+"
      title="Adult Dating Sites in Canada (2026)"
      subtitle="Dating offers for Canada visitors."
      lastUpdated={
        <>
          Last updated:{" "}
          <time dateTime={CANADA_PAGE_LAST_UPDATED.iso}>{CANADA_PAGE_LAST_UPDATED.label}</time>
        </>
      }
      lede="A Canada-focused shortlist of third-party dating listings from our catalog. TheDateCompass compares options — we do not operate these platforms."
      note="Compare categories and descriptions here first. Confirm eligibility, privacy settings, and terms on each provider site before you register. Adults 18+ only."
      ctaLabel="Browse offers"
      image={preview}
      imageAlt="Canada dating offers preview"
      offerEyebrow="Canada offers"
      offerTitle="Nine platforms to compare"
      offerDescription="A Canada-focused shortlist spanning casual dating, gay dating, adult and mature dating, trans dating, and niche adult social. Open any card to visit the third-party site."
      offers={canadaOffers.map((offer) => (
        <CanadaOfferCard key={offer.slug} offer={offer} />
      ))}
      afterOffers={
        <>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
            18+ only. TheDateCompass contains sponsored links. Selecting an offer redirects you to an independent third-party provider site.
          </p>
          <USAComparisonTable variant="canada" canadaOffers={canadaOffers} />
        </>
      }
      methodology={
        <section id="how-we-rank" className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">Our approach</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">How we rank these sites</h2>
            <p className="mt-5 max-w-2xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
              We organise publicly listed information so you can compare Canada-focused options in one place. We do not operate the dating services ourselves.
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
      disclaimer={disclaimer}
      checklistHeading="h2"
      checklist={
        <>
          <li>
            <span className="font-semibold text-cream">Categories —</span> Decide whether you want
            casual dating, gay dating, mature connections, trans dating, or niche adult social
            before you compare brands.
          </li>
          <li>
            <span className="font-semibold text-cream">Audience fit —</span> Check who each offer
            says it is for and whether that matches the conversations you want to have.
          </li>
          <li>
            <span className="font-semibold text-cream">Region and language settings —</span> On the
            destination site, review any region, locale, or language options shown during signup so
            the experience matches how you prefer to browse.
          </li>
          <li>
            <span className="font-semibold text-cream">Privacy —</span> Look for profile visibility
            controls and clear reporting or blocking tools before you share personal details.
          </li>
          <li>
            <span className="font-semibold text-cream">Communication features —</span> Confirm how
            messaging and matching work on the provider site.
          </li>
          <li>
            <span className="font-semibold text-cream">Age and terms —</span> All offers on this
            page are for adults 18+. Always read the current terms and privacy policy on the
            external platform before registering.
          </li>
        </>
      }
      faqEyebrow="FAQ · Canada"
      faqTitle="Questions about dating offers for Canada visitors"
      faqSubtitle="Straightforward answers about using this Canada comparison page and the third-party listings on it."
      faqs={canadaFaqs}
      guideId="canada-dating-guide"
      guideEyebrow="Canada dating guide"
      guideTitle="How to compare adult dating and social platforms in Canada"
      guideDescription="A practical walkthrough for visitors who want to shortlist third-party options before creating an account."
      guide={
        <>
          <p>
            Online dating decisions often start with too many tabs and too little structure. This
            Canada page is meant to slow that moment down: instead of jumping straight into signup,
            you can scan a set of third-party adult dating listings organised by category.
            TheDateCompass presents those listings with short descriptions so you can see whether
            an offer leans casual, community-focused, mature, trans-inclusive, or niche adult
            social. We do not run the platforms, host profiles, or handle payments and
            support—those details live on each provider’s own site.
          </p>
          <p>
            Because Canada spans multiple time zones and long distances between cities, many people
            begin with digital conversation before anything in person. That makes category fit
            especially useful early on. If you want low-pressure chats, start with casual adult
            dating cards. If you are looking for gay dating spaces, mature audiences, trans dating,
            or niche adult social communities, filter by those labels.
          </p>
          <p>
            After you pick a direction, read the cards that remain for tone and focus. Ask whether
            the listing describes flirty encounters, community matching, age-focused connections,
            inclusive dating, or interest-based adult social spaces. Then use the related category
            links on this Canada layout when you want a wider view of how TheDateCompass groups
            similar offer types. Those pages are internal guides, not rankings, and they can help
            you compare themes without treating every brand as interchangeable.
          </p>
          <p>
            Clicking an offer always takes you to an external destination. Interface language
            options, region settings, moderation tools, and account rules are controlled by that
            provider and can change. Before you register, open the terms and privacy policy on the
            destination site. Confirm age and eligibility requirements. If messaging, profile
            visibility, or reporting tools are important to you, look for those controls on the
            provider page rather than assuming this summary covers every product detail.
          </p>
          <p>
            Privacy habits matter as much as category choice. Prefer services that let you manage
            visibility, block or report accounts, and keep early conversations on-platform. Do not
            send money or sensitive identity documents to someone you have only met online. If an
            online chat later becomes an in-person plan, choose a public place and tell someone you
            trust. These steps are general safety practices for adult online dating; they are not a
            statement about how safe any specific platform is.
          </p>
          <p>
            Treat this Canada page as a comparison worksheet, not a verdict. The nine offers in the
            list above are a curated shortlist for this layout. They are not ordered as winners,
            and this guide does not claim which service is most popular, cheapest, or right for
            every visitor. Shortlist here, explore related categories when helpful, and verify the
            live details on each destination site. If you want to see how similar shortlists are
            arranged for other regions, use the country links at the bottom of the page.
          </p>
        </>
      }
      categoriesId="canada-related-categories"
      categoriesTitle="Explore dating categories in Canada"
      categoriesDescription="Browse existing category pages that match the offer themes on this Canada shortlist."
      categories={[...canadaCategories]}
      countriesTitleId="canada-other-countries"
      countries={[...otherCountries]}
    />
  );
}
