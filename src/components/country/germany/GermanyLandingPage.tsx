import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import CountryHeroCta from "@/components/country/common/CountryHeroCta";
import GermanySponsoredStrip from "@/components/country/germany/GermanySponsoredStrip";
import GermanyOfferCard from "@/components/country/germany/GermanyOfferCard";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import UKFaq from "@/components/country/uk/UKFaq";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import GermanyTimedOfferModal from "@/components/country/germany/GermanyTimedOfferModal";
import { germanyPageVisuals } from "@/data/germanyPageVisuals";
import {
  GERMANY_PAGE_LAST_UPDATED,
  GERMANY_SPONSORED_LABEL,
  germanyFaqs,
  germanyOffers,
  germanyPageOffers,
  getGermanyGoHref,
  getGermanyTrackedHref,
} from "@/data/germanyOffers";

const fremdgehenOffer = germanyOffers.find((item) => item.slug === "fremdgehen69");

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
    text: "Casual, mature, and sponsored listings shown in this shortlist.",
  },
  {
    title: "Public features",
    text: "Information providers share publicly about matching, chat, and signup.",
  },
  {
    title: "Privacy information",
    text: "We point you to each provider’s own privacy policy. We do not invent privacy scores.",
  },
] as const;

const pillClass =
  "inline-flex items-center rounded-full border border-[#ff2d87]/35 bg-[#141a3d] px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:bg-[#ff2d87] hover:text-white";

export default function GermanyLandingPage() {
  const featured = germanyPageOffers[0];
  const rest = germanyPageOffers.slice(1);

  return (
    <div className="pb-24 lg:pb-0">
      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
        <NoiseOverlay />
        <main className="relative overflow-hidden font-display text-cream">
          <section className="relative min-h-[88vh]">
            <Image
              src={germanyPageVisuals.hero.src}
              alt={germanyPageVisuals.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#070b1c]/78 via-[#070b1c]/45 to-[#070b1c]/15"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-transparent to-[#070b1c]/20"
              aria-hidden
            />
            <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 lg:justify-center lg:pb-24 lg:pt-20">
              <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                <span className="h-px w-10 bg-[#ff2d87]" aria-hidden />
                Deutschland · Adults 18+
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[0.92] tracking-[-0.045em] md:text-7xl">
                Dating sites in Germany
              </h1>
              <p className="mt-5 max-w-xl font-serif-accent text-2xl italic leading-snug text-[#ff8aa8] sm:text-3xl">
                Berlin, München, Hamburg — find the spark close to home.
              </p>
              <p className="mt-4 text-sm text-cream/55">
                Last updated:{" "}
                <time dateTime={GERMANY_PAGE_LAST_UPDATED.iso}>
                  {GERMANY_PAGE_LAST_UPDATED.label}
                </time>
              </p>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-cream/75">
                Three adult platforms compared for Germany visitors. Fremdgehen69 is a paid
                placement for Germany and Austria.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-cream/55">
                18+ only. Selecting an offer redirects you to an independent third-party site.
                TheDateCompass may earn a commission.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                {fremdgehenOffer ? (
                  <CountryHeroCta
                    href={getGermanyTrackedHref(fremdgehenOffer, "lp_hero")}
                    label={`Visit ${fremdgehenOffer.name}`}
                    placement="lp_hero"
                    country="germany"
                    trackName={fremdgehenOffer.name}
                    target="_blank"
                  />
                ) : null}
                <a
                  href="#offers"
                  className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#ff8aa8] underline-offset-4 hover:underline"
                >
                  See listed offers
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-2">
                {germanyPageVisuals.cities.map((city) => (
                  <li
                    key={city.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/85"
                  >
                    <MapPin size={11} aria-hidden />
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-label="Cities across Germany" className="border-y border-[#ff2d87]/15">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {germanyPageVisuals.cities.map((city) => (
                <figure key={city.name} className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={city.src}
                    alt={city.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070b1c] to-transparent px-4 pb-4 pt-16 text-sm font-extrabold tracking-wide">
                    {city.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="offers" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  Germany offers
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Three platforms, German cities
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic leading-relaxed text-cream/70 sm:text-xl">
                  Photos from Berlin, München and historic German streets. Confirm pricing and
                  terms on each provider site.
                </p>
              </div>

              {fremdgehenOffer ? (
                <div className="mx-auto mt-10 max-w-7xl">
                  <GermanySponsoredStrip
                    placement="lp_mid"
                    variant="embedded"
                    image={germanyPageVisuals.strip.src}
                    imageAlt={germanyPageVisuals.strip.alt}
                  />
                </div>
              ) : null}

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {featured ? <GermanyOfferCard offer={featured} featured /> : null}
                {rest.map((offer) => (
                  <GermanyOfferCard key={offer.slug} offer={offer} />
                ))}
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-cream/45">
                TheDateCompass is an independent comparison site. We may earn a commission when
                you visit a platform through our links. All listed services are third-party
                providers for adults 18+. Always confirm current terms and eligibility on the
                destination site.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-[11px] leading-5 text-cream/55">
                Listings marked {GERMANY_SPONSORED_LABEL} are paid placements. Fremdgehen69 is
                listed for Germany and Austria only.{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline"
                >
                  Affiliate disclosure
                </Link>
                .
              </p>

              <USAComparisonTable variant="germany" germanyOffers={germanyPageOffers} />
            </div>
          </section>

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
                options in one place.
              </p>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {howWeRankItems.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-3xl border border-[#ff2d87]/25 bg-[#141a3d] p-6"
                  >
                    <h3 className="text-xl font-extrabold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <UKFaq
            items={germanyFaqs}
            eyebrow="FAQ · Germany"
            title="Questions about dating offers for Germany visitors"
            subtitle="Clear answers about how this Germany comparison page works."
          />

          <section
            id="germany-dating-guide"
            className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20"
          >
            <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  Germany dating guide
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  How to compare adult dating platforms in Germany
                </h2>
                <p className="mt-5 font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                  A practical walkthrough before you open a provider site.
                </p>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70">
                  <p>
                    This page is a shortlist for Germany, not a signup form. The photos are from
                    German cities and towns so you can place the listings in a real setting —
                    Berlin nights, Munich streets, Hamburg harbour, Bavarian old towns. We do not
                    operate the platforms, host profiles, or handle payments.
                  </p>
                  <p>
                    Start with intention. Fremdgehen69 is the sponsored casual listing for
                    Germany and Austria. DirtyDating sits in the same casual category.
                    Grannyhunter is the mature option. Matching intention to category first
                    usually makes the click easier to judge.
                  </p>
                  <p>
                    After you shortlist, open a provider only when the listing fits. Review
                    current terms, privacy settings, and age rules on that site. You can also
                    compare similar brands on our{" "}
                    <Link
                      href="/usa"
                      className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline"
                    >
                      USA dating page
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#ff2d87]/25 lg:aspect-[5/6]">
                <Image
                  src={germanyPageVisuals.guide.src}
                  alt={germanyPageVisuals.guide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070b1c] to-transparent px-5 pb-5 pt-16 text-sm font-bold">
                  Bavaria · Neuschwanstein
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="border-t border-[#ff2d87]/15 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl space-y-16 px-6">
              <div id="germany-related-categories">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                    Related categories
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                    Explore dating categories in Germany
                  </h2>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {relatedCategories.map((category) => (
                    <li key={category.href}>
                      <Link href={category.href} className={pillClass}>
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                    More countries
                  </p>
                  <h2
                    id="germany-other-countries"
                    className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl"
                  >
                    Explore other countries
                  </h2>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {otherCountries.map((country) => (
                    <li key={country.href}>
                      <Link href={country.href} className={pillClass}>
                        {country.flag} {country.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer tone="home" />
      {fremdgehenOffer ? (
        <>
          <FixedOfferCta
            offer={{
              name: fremdgehenOffer.name,
              url: getGermanyGoHref(fremdgehenOffer.slug),
              promo: `${GERMANY_SPONSORED_LABEL} · DE & AT · 18+`,
            }}
            placement="lp_end"
            ctaLabel={`Visit ${fremdgehenOffer.name} →`}
          />
          <GermanyTimedOfferModal
            offer={fremdgehenOffer}
            imageSrc={germanyPageVisuals.offers.fremdgehen69.src}
            imageAlt={germanyPageVisuals.offers.fremdgehen69.alt}
          />
        </>
      ) : null}
    </div>
  );
}
