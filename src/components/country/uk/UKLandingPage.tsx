import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import UKOfferCard from "@/components/country/uk/UKOfferCard";
import { ukOffers } from "@/data/countries/uk";

const ukCategories = [
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
  { href: "/australia", label: "Australia", flag: "🇦🇺" },
] as const;

const ukFaqs = [
  {
    question: "What is this UK dating comparison page designed for?",
    answer:
      "It gives United Kingdom visitors a focused place to compare six third-party adult dating and companion listings. Review categories and short descriptions here, then open a provider site if an option looks relevant. TheDateCompass does not operate those platforms.",
  },
  {
    question: "What categories appear on the UK shortlist?",
    answer:
      "Casual dating, gay dating, adult dating, mature dating, niche adult social, and an AI companion option. Use the labels on each card—and the related category links on this page—to narrow by what kind of experience you want.",
  },
  {
    question: "Is TheDateCompass a UK dating operator?",
    answer:
      "No. TheDateCompass is an independent comparison website. We do not host member profiles, handle registrations or payments, or provide customer support for the listed services. Offer buttons open external third-party sites.",
  },
  {
    question: "How should UK visitors treat the outbound offer buttons?",
    answer:
      "As a next step for research, not as a finished decision. Read the card on this page first, then check the destination site for current signup rules, privacy settings, and terms. Links may be affiliate links. All listed services are intended for adults 18+ only.",
  },
  {
    question: "What is worth checking before I create a profile?",
    answer:
      "Age and eligibility requirements, the privacy policy and community rules, and how messaging or AI chat works on that platform today. Features and policies can change, so confirm details on the provider’s live pages before you register.",
  },
];

export default function UKLandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              UK comparison page · adults 18+
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Dating offers for{" "}
              <span className="font-serif-accent italic text-brand-rose">
                UK
              </span>{" "}
              visitors.
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-8 text-fog">
              A United Kingdom–focused shortlist of third-party dating and
              companion listings from our catalog. TheDateCompass compares
              options — we do not operate these platforms.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-7 text-fog/90">
              Compare categories and descriptions on this page, then confirm
              eligibility, privacy settings, and terms on each provider site
              before you register. Adults 18+ only.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a href="#offers" className="tdc-btn-primary">
                Browse offers
                <span className="text-lg">→</span>
              </a>
              <a href="#uk-dating-guide" className="tdc-btn-line">
                Read the guide
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={ukOffers[0]?.image ?? "/images/ai-model.webp"}
                alt="UK dating offers preview"
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
              eyebrow="UK offers"
              title="Six platforms to compare"
              description="A UK-focused shortlist spanning casual dating, gay dating, adult and mature dating, niche adult social, and AI companions. Open any card to visit the third-party site."
            />

            <div className="mt-10 space-y-4 sm:mt-14">
              {ukOffers.map((offer) => (
                <UKOfferCard key={offer.id} offer={offer} />
              ))}
            </div>

            <CountryAffiliateDisclaimer
              variant="germany"
              text="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
            />
          </div>
        </section>

        <section
          aria-labelledby="uk-related-categories"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="Related categories"
              title={
                <span id="uk-related-categories">
                  Explore dating categories in the UK
                </span>
              }
              description="Browse existing category pages that match the offer themes on this UK shortlist."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {ukCategories.map((category) => (
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
          id="uk-dating-guide"
          className="scroll-mt-20 border-t border-cream/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="UK dating guide"
              title="How to compare adult dating and social platforms in the UK"
              description="An informational guide for United Kingdom visitors who want to shortlist third-party options carefully."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Adult dating and social platforms are easier to evaluate when
                you separate intention from marketing. This UK page gathers a
                small third-party shortlist so you can see, in one place,
                whether an offer is framed as casual dating, gay dating, mature
                connections, niche adult social browsing, or AI companion chat.
                TheDateCompass exists for that comparison moment. We do not run
                the platforms, host profiles, or manage registrations, payments,
                or support—those responsibilities sit with each external
                provider.
              </p>
              <p>
                Start by naming the experience you want. Some visitors prefer
                low-pressure adult chats; others want community-oriented gay
                dating spaces, mature audiences, or interest-led adult social
                environments. AI companion products are a different category
                altogether: they centre on conversation and virtual interaction
                rather than meeting people in person. Choosing a category first
                makes the six-offer list below more useful, because you can set
                aside listings that simply target a different kind of connection.
              </p>
              <p>
                Next, read the cards that remain for focus and wording. Look at
                how each platform describes itself and whether that description
                matches your expectations. If you want more context on how
                TheDateCompass groups similar themes, follow the related
                category links on this UK layout. Those pages expand the theme;
                they do not award rankings or declare a single preferred brand.
              </p>
              <p>
                Outbound buttons always open third-party destinations. Account
                rules, moderation tools, interface details, and any paid
                features are defined on those sites and can change. Before you
                register, review the provider’s current terms and privacy
                policy. Confirm age and eligibility requirements. If messaging
                behaviour, profile visibility, or reporting tools matter to you,
                locate that information on the destination site rather than
                assuming this summary includes every operational detail.
              </p>
              <p>
                Privacy and personal caution should travel with you from
                shortlist to signup. Prefer platforms that make visibility
                controls and block/report tools easy to find. Keep early
                conversations on-platform when you can. Do not share sensitive
                financial or identity information with people you have not met
                or do not trust. If online chat later becomes an in-person plan,
                meet in a public place and tell someone you trust. These are
                practical habits for adult online dating; they are not
                assessments of any specific platform’s safety.
              </p>
              <p>
                Treat this UK page as a comparison aid, not a substitute for
                your own checks. The six offers above are a curated shortlist
                for this layout and are not ordered as winners. This guide does
                not claim which option is most popular, cheapest, or right for
                every visitor. Shortlist by category here, use related links for
                theme context, and verify live details on each destination site.
                If you want to see how similar shortlists are arranged for other
                countries, use the country links at the bottom of the page.
              </p>
            </div>

            <div className="mt-12 border border-cream/10 bg-ink-soft p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
                What to consider when choosing a platform
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-fog sm:text-base">
                <li>
                  <span className="font-semibold text-cream">Categories —</span>{" "}
                  Align casual, gay dating, mature, niche adult social, or AI
                  companion listings with the experience you actually want.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Audience fit —
                  </span>{" "}
                  Check who each offer says it is for before you invest time in
                  a signup flow.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Privacy controls —
                  </span>{" "}
                  Look for profile visibility options and clear ways to block or
                  report accounts.
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
                  additional eligibility rules—verify them before registering.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Destination terms —
                  </span>{" "}
                  Policies and features can change. Always review the current
                  terms and privacy policy on the external platform.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CountryFaqSection
          variant="germany"
          eyebrow="FAQ · UK"
          title="Questions about dating offers for UK visitors"
          subtitle="Clear answers about this United Kingdom comparison page and how to use the listings responsibly."
          items={ukFaqs}
        />

        <section
          aria-labelledby="uk-other-countries"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="More countries"
              title={
                <span id="uk-other-countries">Explore other countries</span>
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
