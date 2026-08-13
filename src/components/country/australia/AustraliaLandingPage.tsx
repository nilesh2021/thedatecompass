import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import AustraliaOfferCard from "@/components/country/australia/AustraliaOfferCard";
import { australiaOffers } from "@/data/countries/australia";

const australiaCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/category/ai-girlfriend", label: "AI girlfriend" },
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
      "It brings a small set of third-party adult dating and companion offers into one Australia-focused layout. You can review categories and short descriptions for the six listings here, then visit a provider site if an option fits what you are looking for. TheDateCompass does not operate those services.",
  },
  {
    question: "Which offer types are included for Australia visitors?",
    answer:
      "The shortlist includes casual dating, gay dating, adult dating, mature dating, niche adult social, and an AI companion listing. Category labels on the cards—and the related category links below—help you narrow by intention before leaving this page.",
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

export default function AustraliaLandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              Australia comparison page · adults 18+
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Dating offers for{" "}
              <span className="font-serif-accent italic text-brand-rose">
                Australia
              </span>{" "}
              visitors.
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-8 text-fog">
              An Australia-focused shortlist of third-party dating and companion
              listings from our catalog. TheDateCompass compares options — we do
              not operate these platforms.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-7 text-fog/90">
              Review categories and descriptions side by side, then confirm
              eligibility, privacy settings, and terms on each provider site.
              Adults 18+ only.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a href="#offers" className="tdc-btn-primary">
                Browse offers
                <span className="text-lg">→</span>
              </a>
              <a href="#australia-dating-guide" className="tdc-btn-line">
                Read the guide
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={australiaOffers[0]?.image ?? "/images/ai-model.webp"}
                alt="Australia dating offers preview"
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
              eyebrow="Australia offers"
              title="Six platforms to compare"
              description="An Australia-focused shortlist spanning casual dating, gay dating, adult and mature dating, niche adult social, and AI companions. Open any card to visit the third-party site."
            />

            <div className="mt-10 space-y-4 sm:mt-14">
              {australiaOffers.map((offer) => (
                <AustraliaOfferCard key={offer.id} offer={offer} />
              ))}
            </div>

            <CountryAffiliateDisclaimer
              variant="germany"
              text="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
            />
          </div>
        </section>

        <section
          aria-labelledby="australia-related-categories"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="Related categories"
              title={
                <span id="australia-related-categories">
                  Explore dating categories in Australia
                </span>
              }
              description="Browse existing category pages that match the offer themes on this Australia shortlist."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {australiaCategories.map((category) => (
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
          id="australia-dating-guide"
          className="scroll-mt-20 border-t border-cream/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="Australia dating guide"
              title="How to compare adult dating and social platforms in Australia"
              description="A calm, informational guide for visitors shortlisting third-party platforms before they sign up."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Choosing an adult dating or social platform can feel noisy when
                every site promises a different experience. This Australia page
                is designed as a quiet comparison step: a compact shortlist of
                third-party listings with clear category labels so you can see
                whether an offer is aimed at casual dating, gay dating, mature
                audiences, niche adult social spaces, or AI companion chat.
                TheDateCompass only presents those options for comparison. We do
                not operate the platforms, manage accounts, or process payments
                and support requests.
              </p>
              <p>
                For many people browsing from Australia, online conversation is
                the first stage—sometimes because schedules are busy, sometimes
                because distance between cities makes digital contact more
                practical at the start. That is why intention matters before
                brand names. Decide whether you want low-pressure adult chats,
                a community-oriented dating space, mature connections, interest-
                based adult social browsing, or an AI companion that stays in
                the realm of virtual conversation. Matching intention to category
                first usually removes half the noise.
              </p>
              <p>
                With a category in mind, read the remaining cards for framing
                rather than assuming every listing works the same way. Notice
                whether the copy emphasises flirty encounters, inclusive gay
                dating, mature preferences, niche interests, or AI chat. If you
                want a wider view of how TheDateCompass groups similar themes,
                use the related category links on this Australia layout. Those
                pages help you explore offer types; they are not scoreboards and
                do not rank platforms against each other.
              </p>
              <p>
                When you click Visit, you leave this site for a third-party
                destination. Signup rules, profile tools, moderation features,
                and any paid upgrades are defined there and can change. Before
                you create an account, open the provider’s terms and privacy
                policy. Confirm that you meet age and eligibility requirements.
                If you care about how messaging works, whether profiles are
                public, or how to report problems, find those answers on the
                destination site instead of relying only on this summary.
              </p>
              <p>
                Keep privacy and personal judgment in the loop. Use platforms
                that make it straightforward to control visibility and to block
                or report accounts. Keep early conversations on-platform when
                possible. Never send money or sensitive documents to someone you
                have not met in a trusted context. If online chat later leads to
                meeting in person, choose a public place and let someone you
                trust know your plans. These are everyday precautions for adult
                online dating; they are not claims about any single service’s
                safety record.
              </p>
              <p>
                Use this Australia page as a shortlist tool, not as a final
                verdict. The six offers above are curated for this layout and
                are not presented as winners. This guide does not say which
                platform is most popular, cheapest, or suitable for every
                visitor. Compare categories here, follow related links when you
                want more context, and verify live details on each destination
                site. Country links at the bottom of the page open our other
                active regional shortlists if you want to see how similar pages
                are organised elsewhere.
              </p>
            </div>

            <div className="mt-12 border border-cream/10 bg-ink-soft p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
                What to consider when choosing a platform
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-fog sm:text-base">
                <li>
                  <span className="font-semibold text-cream">
                    Start with intention —
                  </span>{" "}
                  Casual dating, gay dating, mature, niche adult social, and AI
                  companion products solve different needs—pick the category
                  first.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Audience fit —
                  </span>{" "}
                  Read who each offer says it is for and whether that matches
                  the connections you want.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Online-first practicality —
                  </span>{" "}
                  If distance or schedule means chat comes before meeting,
                  check how messaging or AI conversation works on the
                  destination site.
                </li>
                <li>
                  <span className="font-semibold text-cream">Privacy —</span>{" "}
                  Review visibility settings, data policies, and reporting tools
                  before sharing personal information.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Age requirements —
                  </span>{" "}
                  Listings on this page are for adults 18+. Providers may add
                  further eligibility rules—confirm them on the provider site.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Destination terms —
                  </span>{" "}
                  Features and policies can change. Always check the current
                  terms and privacy policy before you register.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CountryFaqSection
          variant="germany"
          eyebrow="FAQ · Australia"
          title="Questions about dating offers for Australia visitors"
          subtitle="Direct answers about this Australia comparison page and how to use the listings carefully."
          items={australiaFaqs}
        />

        <section
          aria-labelledby="australia-other-countries"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="More countries"
              title={
                <span id="australia-other-countries">
                  Explore other countries
                </span>
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
