"use client";

import { germanyOffers } from "@/data/germanyOffers";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import CountryOfferCta from "@/components/country/common/CountryOfferCta";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import { ShieldCheck } from "lucide-react";

/** Internal category pages that clearly match current Germany offer themes. */
const relatedCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/category/ai-girlfriend", label: "AI girlfriend" },
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
] as const;

const comparisonStats = [
  { label: "Platforms compared", value: `${germanyOffers.length}` },
  { label: "Guide updated", value: "2026" },
  { label: "Audience", value: "Adults 18+" },
];

const heroImages = {
  main: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
};

const ctaHeroClass =
  "group relative inline-flex min-h-[56px] cursor-pointer items-stretch overflow-hidden border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_rgba(255,61,110,0.7)]";

const germanyFaqs = [
  {
    question: "What dating sites are compared for Germany?",
    answer:
      "This Germany page compares third-party dating and adult dating offers by audience, dating focus, and listed features. Choose an option based on the category and description that fit what you are looking for.",
  },
  {
    question: "Which dating sites are listed for Germany visitors?",
    answer:
      "The offers on this page are third-party dating and companion platforms presented for visitors comparing options with a Germany focus. Always confirm eligibility and terms on the destination site.",
  },
  {
    question: "Which offers on this page focus on casual dating?",
    answer:
      "If you are looking for casual dating, look for platforms on this page that describe casual encounters or adult dating. Compare the category labels and bullet points on each offer before visiting a provider.",
  },
  {
    question: "Are there adult dating sites for different interests in Germany?",
    answer:
      "Yes. Adult dating platforms can focus on different types of connections and interests. Some offers are designed for casual dating, while others focus on specific communities, preferences, or alternative dating experiences. Check each platform's description to find an option that matches what you are looking for.",
  },
  {
    question: "How do I choose a dating site in Germany?",
    answer:
      "Consider the type of connection you want, the platform's target audience, available features, pricing, privacy options, and whether the service is available in Germany. Comparing several dating platforms before choosing one can help you find an option that suits your preferences.",
  },
  {
    question: "Are these dating platforms safe to use?",
    answer:
      "Online dating services have different privacy and safety features. Before using a platform, review its terms, privacy policy, community guidelines, and available safety controls. Avoid sharing sensitive personal or financial information with people you have not met or do not trust.",
  },
];

function GermanyOfferCard({
  platform,
  variant = "default",
}: {
  platform: (typeof germanyOffers)[number];
  variant?: "featured" | "default";
}) {
  const name = platform.name.trim();
  const isFeatured = variant === "featured" || platform.highlighted;

  return (
    <article
      className={
        isFeatured
          ? "relative overflow-hidden border border-brand-rose/40 bg-[linear-gradient(145deg,rgba(255,61,110,0.14),rgba(22,24,28,0.95))] p-4 sm:p-8 lg:p-10"
          : "group relative border border-cream/10 bg-ink-soft p-4 transition duration-300 hover:border-brand-rose/25 sm:p-6"
      }
    >
      <div
        className={
          isFeatured
            ? "grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:items-stretch"
            : "grid gap-5 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center"
        }
      >
        {/* Model photo */}
        <div
          className={
            isFeatured
              ? "relative overflow-hidden border border-cream/10 sm:row-span-1"
              : "relative shrink-0 overflow-hidden border border-cream/10 sm:row-span-2"
          }
        >
          <Image
            src={platform.image}
            alt={`${name} member`}
            width={isFeatured ? 360 : 176}
            height={isFeatured ? 480 : 220}
            className={
              isFeatured
                ? "h-56 w-full object-cover object-top sm:h-64 lg:h-full lg:min-h-[280px]"
                : "h-[110px] w-[88px] object-cover object-top sm:h-[132px]"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        {/* Platform details */}
        <div className={isFeatured ? "max-w-3xl" : "min-w-0"}>
          <h3
            className={
              isFeatured
                ? "text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
                : "text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
            }
          >
            {name}
          </h3>

          <p
            className={
              isFeatured
                ? "mt-3 max-w-2xl text-base font-medium text-brand-rose sm:text-lg"
                : "mt-1 text-sm font-medium text-brand-rose"
            }
          >
            {platform.category}
          </p>

          <ul
            className={
              isFeatured
                ? "mt-6 grid gap-3 sm:grid-cols-2"
                : "mt-4 space-y-2"
            }
          >
            {platform.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/80"
              >
                <span className="mt-0.5 shrink-0 text-brand-mint">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {isFeatured && (
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-fog">
              <ShieldCheck size={14} className="text-brand-mint" />
              Independent comparison · Affiliate link
            </p>
          )}
        </div>

        {/* CTA column */}
        <div
          className={
            isFeatured
              ? "flex flex-col justify-end gap-4 lg:items-stretch"
              : "flex shrink-0 flex-col gap-2 sm:items-end"
          }
        >
          <CountryOfferCta
            href={platform.affiliateLink}
            label={platform.buttonText.trim()}
            variant={isFeatured ? "germanyFeatured" : "germanyDefault"}
            offerName={name}
            country="germany"
          />

          {isFeatured ? (
            <span className="text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog">
              18+ · External site · Featured listing
            </span>
          ) : (
            <span className="text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog sm:text-right">
              18+ · External site
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function GermanyLandingPage() {
  const featured =
    germanyOffers.find((offer) => offer.highlighted) ?? germanyOffers[0];
  const otherOffers = germanyOffers.filter((offer) => offer !== featured);

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              Germany comparison page · adults 18+
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Find the{" "}
              <span className="font-serif-accent italic text-brand-rose">
                spark
              </span>{" "}
              you want in Germany.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-fog">
              Casual dating, niche communities, mature matches, and AI
              companions — compared side by side so you can skip the guesswork
              and click what fits.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("offers")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={ctaHeroClass}
              >
                <span className="flex flex-1 items-center justify-center px-8 text-sm font-extrabold uppercase tracking-[0.12em]">
                  Compare now
                </span>
                <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft">
                  <span className="text-lg transition duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </button>

              <a href="#germany-dating-guide" className="tdc-btn-line">
                Read the guide
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={heroImages.main}
                alt="Couple enjoying a date in Germany"
                width={1200}
                height={800}
                priority
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>

              <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden border-4 border-ink shadow-2xl lg:block">
              
              </div>

              <div className="absolute -right-4 -top-6 hidden w-36 overflow-hidden border-4 border-ink shadow-2xl lg:block">
               
            </div>
          </div>
        </section>

        <section
          id="offers"
          className="relative border-t border-cream/10 py-14 sm:py-20 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
          >
            <Image
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
              <div>
                <CountrySectionHeading
                  variant="germany"
                  eyebrow="Germany offers"
                  title="Adult dating platforms compared"
                  description="From CheekyCrush and RealSexClub to niche picks like FetishPartner, MilfFinder, and Dreamz.ai — each offer below matches our live affiliate lineup."
                />
              </div>

              <div className="grid grid-cols-3 gap-px border border-cream/10 bg-cream/10">
                {comparisonStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-ink-soft px-4 py-4 text-center sm:px-5"
                  >
                    <p className="text-xl font-extrabold text-cream sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-fog">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <GermanyOfferCard platform={featured} variant="featured" />
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-cream/10 pb-4">
                <div>
                  <CountrySectionHeading
                    variant="germanySecondary"
                    titleAs="h3"
                    eyebrow="More options"
                    title="More platforms worth comparing"
                  />
                </div>
                <p className="hidden text-sm text-fog sm:block">
                  {otherOffers.length} additional picks
                </p>
              </div>

              <div className="space-y-4">
                {otherOffers.map((offer) => (
                  <GermanyOfferCard key={offer.name} platform={offer} />
                ))}
              </div>
            </div>

            <CountryAffiliateDisclaimer
              variant="germany"
              text="TheDateCompass is an independent comparison site. We may earn a commission when you visit a platform through our links. All listed services are third-party providers for adults 18+. Always confirm current terms and eligibility on the destination site."
            />
          </div>
        </section>

        <section
          aria-labelledby="germany-related-categories"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="Related categories"
              title={
                <span id="germany-related-categories">
                  Explore dating categories in Germany
                </span>
              }
              description="Category pages that match the Germany offers above — gay dating, AI companions, adult and mature dating, and niche sites."
            />

            <ul className="mt-6 flex flex-wrap gap-3">
              {relatedCategories.map((category) => (
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
          id="germany-dating-guide"
          className="scroll-mt-20 border-t border-cream/10 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germany"
              eyebrow="Germany dating guide"
              title="How to compare adult dating platforms in Germany"
              description="A practical, neutral walkthrough for visitors shortlisting third-party options before signing up."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fog">
              <p>
                This Germany page is built for comparison, not for rushing into
                a signup. Visitors can scan third-party adult dating and
                companion listings by category—casual dating, gay dating, mature
                audiences, niche adult social spaces, and AI companions—before
                deciding whether to open a provider site. TheDateCompass
                presents those options with short descriptions and bullet
                points. We do not operate the platforms, host profiles, or
                handle payments and support.
              </p>
              <p>
                Start with intention. If you want low-pressure chats, focus on
                casual or adult dating cards. If you are looking for gay dating
                communities, mature connections, fetish-oriented adult social
                spaces, or AI companion chat, use those category labels to
                narrow the list. Matching intention to category first usually
                makes the remaining cards easier to evaluate.
              </p>
              <p>
                After you shortlist, click through only when a listing’s framing
                fits what you want. Every offer button opens an external site
                where signup rules, privacy settings, messaging tools, and any
                paid features are defined and can change. Review the provider’s
                current terms and privacy policy, confirm age and eligibility
                requirements, and check how reporting or visibility controls
                work before you create an account.
              </p>
              <p>
                Treat this page as a comparison aid. The offers above are not
                ranked as winners, and this guide does not claim which option is
                most popular, cheapest, or right for every visitor. Use the
                cards and related category links to orient yourself, then verify
                live details on each destination site. Country links below open
                our other active regional shortlists if you want to compare how
                similar pages are organised elsewhere.
              </p>
            </div>

            <div className="mt-12 border border-cream/10 bg-ink-soft p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
                What to consider when choosing a platform
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-fog sm:text-base">
                <li>
                  <span className="font-semibold text-cream">Categories —</span>{" "}
                  Match casual, gay dating, mature, niche adult social, or AI
                  companion listings to the experience you want.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Audience fit —
                  </span>{" "}
                  Read who each offer says it is for before you invest time in
                  signup.
                </li>
                <li>
                  <span className="font-semibold text-cream">Privacy —</span>{" "}
                  Check visibility settings and block/report tools on the
                  destination site.
                </li>
                <li>
                  <span className="font-semibold text-cream">
                    Age and terms —
                  </span>{" "}
                  All offers here are for adults 18+. Confirm current terms and
                  eligibility on the provider site before registering.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CountryFaqSection
          variant="germany"
          eyebrow="FAQ · Germany"
          title="Questions about dating offers for Germany visitors"
          subtitle="Clear answers about how this Germany comparison page works."
          items={germanyFaqs}
        />

        <section
          aria-labelledby="germany-other-countries"
          className="border-t border-cream/10 py-10 sm:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CountrySectionHeading
              variant="germanySecondary"
              titleAs="h2"
              eyebrow="More countries"
              title={
                <span id="germany-other-countries">Explore other countries</span>
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
