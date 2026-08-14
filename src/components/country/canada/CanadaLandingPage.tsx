import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import CanadaOfferCard from "@/components/country/canada/CanadaOfferCard";
import { canadaOffers } from "@/data/countries/canada";

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
] as const;

const canadaFaqs = [
  {
    question: "What does this Canada dating page help me do?",
    answer:
      "It gives visitors a Canada-focused shortlist of third-party adult dating platforms. You can compare category labels and brief descriptions for the nine offers here, then open a provider site if something looks relevant. TheDateCompass does not operate those platforms.",
  },
  {
    question: "What kinds of offers appear on the Canada shortlist?",
    answer:
      "The listings cover casual dating, gay dating, adult dating, mature dating, trans dating, and niche adult social. Use the category tags on each card—and the related category links on this page—to filter by intention before you click through.",
  },
  {
    question: "Is TheDateCompass a Canadian dating service?",
    answer:
      "No. TheDateCompass is an independent comparison site. We do not host profiles, process registrations or payments, or provide support for the listed services. Offer buttons open external third-party websites.",
  },
  {
    question: "How should someone browsing from Canada use these links?",
    answer:
      "Use this page to shortlist by category and description first. On the destination site, confirm signup rules, language or region settings if shown, privacy options, and current terms. Links may be affiliate links, and every listed service is intended for adults 18+ only.",
  },
  {
    question: "What should I verify before registering on a platform?",
    answer:
      "Check age and eligibility requirements, read the privacy policy and community guidelines, and understand how messaging works on that site. Features and policies can change, so rely on the provider’s live pages—not only this summary—before you create an account.",
  },
];

export default function CanadaLandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              Canada comparison page · adults 18+
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Dating offers for{" "}
              <span className="font-serif-accent italic text-brand-rose">
                Canada
              </span>{" "}
              visitors.
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-8 text-fog">
              A Canada-focused shortlist of third-party dating listings from our
              catalog. TheDateCompass compares options — we do not operate these
              platforms.
            </p>

            <p className="mb-10 max-w-xl text-sm leading-7 text-fog/90">
              Compare categories and descriptions here first. Confirm
              eligibility, privacy settings, and terms on each provider site
              before you register. Adults 18+ only.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a href="#offers" className="tdc-btn-primary">
                Browse offers
                <span className="text-lg">→</span>
              </a>
              <a href="#canada-dating-guide" className="tdc-btn-line">
                Read the guide
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={
                  canadaOffers.find((o) => o.image.startsWith("http"))?.image ??
                  canadaOffers[0].image
                }
                alt="Canada dating offers preview"
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
              eyebrow="Canada offers"
              title="Nine platforms to compare"
              description="A Canada-focused shortlist spanning casual dating, gay dating, adult and mature dating, trans dating, and niche adult social. Open any card to visit the third-party site."
            />

            <div className="mt-10 space-y-4 sm:mt-14">
              {canadaOffers.map((offer) => (
                <CanadaOfferCard key={offer.id} offer={offer} />
              ))}
            </div>

            <CountryAffiliateDisclaimer
              variant="germany"
              text="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. Listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
            />
          </div>
        </section>

        <section
          aria-labelledby="canada-related-categories"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="Related categories"
              title={
                <span id="canada-related-categories">
                  Explore dating categories in Canada
                </span>
              }
              description="Browse existing category pages that match the offer themes on this Canada shortlist."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {canadaCategories.map((category) => (
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
          id="canada-dating-guide"
          className="scroll-mt-20 border-t border-cream/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="Canada dating guide"
              title="How to compare adult dating and social platforms in Canada"
              description="A practical walkthrough for visitors who want to shortlist third-party options before creating an account."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Online dating decisions often start with too many tabs and too
                little structure. This Canada page is meant to slow that moment
                down: instead of jumping straight into signup, you can scan a
                set of third-party adult dating listings organised by category.
                TheDateCompass presents those listings with short descriptions
                so you can see whether an offer leans casual, community-focused,
                mature, trans-inclusive, or niche adult social. We do not run
                the platforms, host profiles, or handle payments and
                support—those details live on each provider’s own site.
              </p>
              <p>
                Because Canada spans multiple time zones and long distances
                between cities, many people begin with digital conversation
                before anything in person. That makes category fit especially
                useful early on. If you want low-pressure chats, start with
                casual adult dating cards. If you are looking for gay dating
                spaces, mature audiences, trans dating, or niche adult social
                communities, filter by those labels.
              </p>
              <p>
                After you pick a direction, read the cards that remain for tone
                and focus. Ask whether the listing describes flirty encounters,
                community matching, age-focused connections, inclusive dating,
                or interest-based adult social spaces. Then use the related
                category links on this Canada layout when you want a wider view
                of how TheDateCompass groups similar offer types. Those pages
                are internal guides, not rankings, and they can help you compare
                themes without treating every brand as interchangeable.
              </p>
              <p>
                Clicking an offer always takes you to an external destination.
                Interface language options, region settings, moderation tools,
                and account rules are controlled by that provider and can
                change. Before you register, open the terms and privacy policy
                on the destination site. Confirm age and eligibility
                requirements. If messaging, profile visibility, or reporting
                tools are important to you, look for those controls on the
                provider page rather than assuming this summary covers every
                product detail.
              </p>
              <p>
                Privacy habits matter as much as category choice. Prefer
                services that let you manage visibility, block or report
                accounts, and keep early conversations on-platform. Do not send
                money or sensitive identity documents to someone you have only
                met online. If an online chat later becomes an in-person plan,
                choose a public place and tell someone you trust. These steps
                are general safety practices for adult online dating; they are
                not a statement about how safe any specific platform is.
              </p>
              <p>
                Treat this Canada page as a comparison worksheet, not a verdict.
                The nine offers in the list above are a curated shortlist for
                this layout. They are not ordered as winners, and this guide
                does not claim which service is most popular, cheapest, or
                right for every visitor. Shortlist here, explore related
                categories when helpful, and verify the live details on each
                destination site. If you want to see how similar shortlists are
                arranged for other regions, use the country links at the bottom
                of the page.
              </p>
            </div>

            <div className="mt-12 border border-cream/10 bg-ink-soft p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
                What to consider when choosing a platform
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-fog sm:text-base">
                <li>
                  <span className="font-semibold text-cream">Categories —</span>{" "}
                  Decide whether you want casual dating, gay dating, mature
                  connections, trans dating, or niche adult social before you
                  compare brands.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Audience fit —
                  </span>{" "}
                  Check who each offer says it is for and whether that matches
                  the conversations you want to have.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Region and language settings —
                  </span>{" "}
                  On the destination site, review any region, locale, or
                  language options shown during signup so the experience matches
                  how you prefer to browse.
                </li>
                <li>
                  <span className="font-semibold text-cream">Privacy —</span>{" "}
                  Look for profile visibility controls and clear reporting or
                  blocking tools before you share personal details.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Communication features —
                  </span>{" "}
                  Confirm how messaging and matching work on the
                  provider site.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Age and terms —
                  </span>{" "}
                  All offers on this page are for adults 18+. Always read the
                  current terms and privacy policy on the external platform
                  before registering.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CountryFaqSection
          variant="germany"
          eyebrow="FAQ · Canada"
          title="Questions about dating offers for Canada visitors"
          subtitle="Straightforward answers about using this Canada comparison page and the third-party listings on it."
          items={canadaFaqs}
        />

        <section
          aria-labelledby="canada-other-countries"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="More countries"
              title={
                <span id="canada-other-countries">Explore other countries</span>
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
