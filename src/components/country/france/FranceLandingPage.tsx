import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import FranceOfferCard from "@/components/country/france/FranceOfferCard";
import { franceOffers } from "@/data/countries/france";

const franceCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/category/ai-girlfriend", label: "AI girlfriend" },
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
] as const;

const franceFaqs = [
  {
    question: "What is this France dating comparison page for?",
    answer:
      "This page helps visitors who want a France-focused place to compare third-party adult dating and social platforms. You can review categories and short descriptions for the six offers listed here, then open a provider site if an option looks relevant. TheDateCompass does not operate those platforms.",
  },
  {
    question: "Which types of platforms are listed on this France page?",
    answer:
      "The shortlist covers casual dating, gay dating, adult dating, mature dating, adult social / niche interests, and an AI companion option. Use the category labels on each card—and the related category links on this page—to narrow by intention before you leave for a third-party site.",
  },
  {
    question: "Does TheDateCompass operate these dating platforms?",
    answer:
      "No. TheDateCompass is an independent comparison site. We do not host member profiles, process registrations or payments, or provide customer support for the listed services. Each button opens an external provider site.",
  },
  {
    question: "How should visitors in France use the offer links?",
    answer:
      "Treat each offer as a starting point for comparison. Read the category and description on this page, then check the destination site for current signup rules, privacy settings, and terms. Links may be affiliate links, and all listed services are intended for adults 18+ only.",
  },
  {
    question: "What should I check before creating an account?",
    answer:
      "Confirm that you meet the provider’s age and eligibility requirements, review the privacy policy and community rules, and understand how messaging, profiles, and any paid features work on that site. Terms and features can change, so always verify details on the destination page rather than relying only on this summary.",
  },
];

export default function FranceLandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              France comparison page · adults 18+
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Dating offers for{" "}
              <span className="font-serif-accent italic text-brand-rose">
                France
              </span>{" "}
              visitors.
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-8 text-fog">
              Browse casual dating, gay dating, mature, adult social, and AI
              companion listings in a France-focused layout. TheDateCompass
              compares third-party options — we do not run these platforms.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-7 text-fog/90">
              Use this page to compare categories and descriptions side by
              side. Confirm eligibility, privacy settings, and terms on each
              provider site before you register. Adults 18+ only.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a href="#offers" className="tdc-btn-primary">
                Browse offers
                <span className="text-lg">→</span>
              </a>
              <a href="#france-dating-guide" className="tdc-btn-line">
                Read the guide
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={franceOffers[0]?.image ?? "/images/ai-model.webp"}
                alt="France dating offers preview"
                width={1200}
                height={800}
                priority
                className="h-[280px] w-full object-cover object-top sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </section>

        <section
          id="offers"
          className="relative scroll-mt-20 border-t border-cream/10 py-14 sm:py-20 lg:py-24"
        >
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="France offers"
              title="Six platforms to compare"
              description="A France-focused shortlist spanning casual dating, gay dating, adult and mature dating, niche adult social, and AI companions. Open any card to visit the third-party site."
            />

            <div className="mt-10 space-y-4 sm:mt-14">
              {franceOffers.map((offer) => (
                <FranceOfferCard key={offer.id} offer={offer} />
              ))}
            </div>

            <CountryAffiliateDisclaimer
              variant="germany"
              text="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
            />
          </div>
        </section>

        <section
          aria-labelledby="france-related-categories"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="Related categories"
              title={
                <span id="france-related-categories">
                  Explore dating categories in France
                </span>
              }
              description="Browse existing category pages that match the offer themes on this France shortlist."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {franceCategories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="inline-flex border border-cream/10 bg-ink-soft px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:border-brand-rose/40 hover:text-brand-rose"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="france-dating-guide"
          className="scroll-mt-20 border-t border-cream/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="France dating guide"
              title="How to compare adult dating and social platforms in France"
              description="A practical, neutral walkthrough for visitors who want to shortlist third-party options before signing up."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Finding an adult dating or social platform that fits your goals
                starts with clarity, not with rushing into signup. Visitors who
                land on this France page often want a single place to scan
                different connection styles—casual chats, community-focused
                dating, mature audiences, niche adult social spaces, or AI
                companion experiences—before deciding whether to leave for a
                provider site. TheDateCompass is built for that comparison step.
                We present third-party listings with category labels and short
                descriptions so you can orient yourself quickly. We do not run
                the platforms, manage profiles, or handle payments and support.
              </p>
              <p>
                A useful way to work through the shortlist is to begin with
                intention. Ask what kind of interaction you want right now. Some
                people prefer low-pressure casual dating. Others look for gay
                dating spaces, mature connections, or adult social communities
                organised around specific interests. Separate from traditional
                dating, AI companion products focus on conversation and virtual
                interaction rather than meeting people in person. Matching your
                intention to a category first usually makes the rest of the
                comparison easier, because you can ignore offers that are simply
                aimed at a different experience.
              </p>
              <p>
                Once you have a category in mind, read each relevant card for
                tone and focus rather than treating every listing as
                interchangeable. Look at how the platform describes itself: is
                it framed around flirty encounters, community matching, mature
                audiences, niche interests, or AI chat? Cross-check that framing
                against the related category pages linked from this France
                layout if you want a broader view of similar offer types. Those
                category pages are part of the same site and can help you
                understand how TheDateCompass groups adult dating and companion
                options without requiring you to invent a ranking of your own.
              </p>
              <p>
                Comparison also means planning for what happens after you click
                through. Every offer button on this page opens an external site.
                Features, interface language options, moderation tools, and
                account rules live on the destination platform and can change
                over time. Before you create a profile, review the provider’s
                current terms, privacy policy, and any safety or community
                guidelines. Confirm that you meet age and eligibility
                requirements. If something is unclear—such as how messaging
                works, whether profiles are public, or how to report
                problems—look for that information on the provider site rather
                than assuming this summary page has every operational detail.
              </p>
              <p>
                Privacy and personal safety deserve the same attention as
                category fit. Prefer platforms that make it easy to control
                visibility, block or report users, and keep early conversations
                on-platform. Avoid sharing sensitive financial or identity
                information with people you have not met or do not trust. For
                any in-person meeting that might follow an online chat, choose
                public places and tell someone you trust about your plans. These
                habits apply whether you are browsing from France or elsewhere;
                they are practical safeguards, not a claim about any specific
                service’s safety record.
              </p>
              <p>
                Finally, treat this France page as a comparison aid rather than
                a substitute for your own judgment. The six offers below the
                hero are a curated shortlist from our catalog for this layout.
                They are not ranked as winners, and this guide does not assert
                which option is most popular, cheapest, or officially endorsed
                for every visitor. Use the cards to shortlist, use the category
                links to explore related themes, and use the destination sites
                to verify the details that matter for your situation. If you
                also want to see how similar shortlists are organised for other
                countries, the country links at the bottom of this page point to
                our other active country layouts.
              </p>
            </div>

            <div className="mt-12 border border-cream/10 bg-ink-soft p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
                What to consider when choosing a platform
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-fog sm:text-base">
                <li>
                  <span className="font-semibold text-cream">Categories —</span>{" "}
                  Match casual, gay dating, mature, adult social, or AI
                  companion listings to the experience you actually want.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Audience fit —
                  </span>{" "}
                  Read who each offer says it is for, then decide whether that
                  audience aligns with your preferences.
                </li>
                <li>
                  <span className="font-semibold text-cream">Privacy —</span>{" "}
                  Check profile visibility, data policies, and controls for
                  blocking or reporting before you share personal details.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Communication features —
                  </span>{" "}
                  Confirm how messaging, matching, or AI chat works on the
                  destination site.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Age requirements —
                  </span>{" "}
                  All offers on this page are for adults 18+. Providers may set
                  additional eligibility rules—verify them on the provider site.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Destination terms —
                  </span>{" "}
                  Pricing, features, and policies can change. Always review the
                  current terms and privacy policy on the external platform
                  before registering.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CountryFaqSection
          variant="germany"
          eyebrow="FAQ · France"
          title="Questions about dating offers for France visitors"
          subtitle="Clear answers about how this France comparison page works and how to use the listings responsibly."
          items={franceFaqs}
        />

        <section
          aria-labelledby="france-other-countries"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="More countries"
              title={
                <span id="france-other-countries">Explore other countries</span>
              }
              description="Compare similar shortlists on our other active country pages."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {otherCountries.map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="inline-flex border border-cream/10 bg-ink-soft px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:border-brand-rose/40 hover:text-brand-rose"
                  >
                    {country.flag} {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
