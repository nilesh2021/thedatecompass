import Link from "next/link";
import CountryNightPage from "@/components/country/common/CountryNightPage";
import AustraliaOfferCard from "@/components/country/australia/AustraliaOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import {
  AUSTRALIA_PAGE_LAST_UPDATED,
  australiaFaqs,
  australiaOffers,
} from "@/data/countries/australia";

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
  { href: "/denmark", label: "Denmark", flag: "🇩🇰" },
] as const;

const howWeRankItems = [
  { title: "Availability in Australia", text: "Whether each platform is listed for visitors comparing options with an Australia focus." },
  { title: "Category", text: "Casual, gay, mature, trans, adult social, and niche listings shown in our inventory." },
  { title: "Public features", text: "Information providers share publicly about matching, chat, and signup." },
  { title: "Privacy information", text: "We point you to each provider’s own privacy policy and data practices. We do not invent privacy scores." },
  { title: "Pricing (where available)", text: "Free and paid options are set by the provider; we do not quote prices here." },
  { title: "Usability", text: "How clearly a platform presents its purpose and next steps before you join." },
];

const disclaimer =
  "TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site.";

export default function AustraliaLandingPage() {
  return (
    <CountryNightPage
      eyebrow="Australia · Adults 18+"
      title="Adult Dating Sites in Australia"
      subtitle="Dating offers for Australia visitors."
      lastUpdated={
        <>
          Last updated:{" "}
          <time dateTime={AUSTRALIA_PAGE_LAST_UPDATED.iso}>{AUSTRALIA_PAGE_LAST_UPDATED.label}</time>
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
        <AustraliaOfferCard key={offer.slug} offer={offer} />
      ))}
      afterOffers={
        <>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
            18+ only. TheDateCompass contains sponsored links. Selecting an offer redirects you to an independent third-party provider site.
          </p>
          <USAComparisonTable variant="australia" australiaOffers={australiaOffers} />
        </>
      }
      methodology={
        <section id="how-we-rank" className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">Our approach</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">How we rank these sites</h2>
            <p className="mt-5 max-w-2xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
              We organise publicly listed information so you can compare Australia-focused options in one place. We do not operate the dating services ourselves.
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
