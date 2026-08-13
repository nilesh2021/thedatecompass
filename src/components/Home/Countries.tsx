import Link from "next/link";
import { ArrowRight, Globe2, CheckCircle2, Clock3 } from "lucide-react";
import { availableCountries, countries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";
import { germanyOffers } from "@/data/germanyOffers";

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

function getOfferCount(slug: string) {
  if (slug === "usa") return usaOffers.length;
  if (slug === "germany") return germanyOffers.length;
  return null;
}

const comingSoonCountries = countries.filter((c) => !c.isAvailable);

export default function Countries() {
  return (
    <section id="countries" className="bg-ink-soft py-16 font-display text-cream sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tdc-eyebrow-mint flex items-center justify-center gap-2">
            <Globe2 size={14} />
            Browse by country
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            Dating platforms available in your country
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/65">
            Start with a live country page to compare adult dating and AI
            companion offers. More regions are expanding soon.
          </p>
        </div>

        <div
          className={`mt-10 grid gap-5 ${
            availableCountries.length === 1
              ? "mx-auto max-w-md"
              : availableCountries.length === 2
                ? "mx-auto max-w-3xl sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {availableCountries.map((country) => {
            const offerCount = getOfferCount(country.slug);

            return (
              <article
                key={country.slug}
                className="flex flex-col border border-brand-rose/40 bg-brand-rose/5 p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center border border-cream/10 text-3xl">
                    {getFlagEmoji(country.code)}
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-mint">
                    <CheckCircle2 size={14} />
                    Live
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold">{country.name}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-cream/65">
                  {offerCount
                    ? `Compare ${offerCount}+ dating offers across casual, gay dating, mature, and AI categories.`
                    : country.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-5">
                  <div>
                    <p className="text-sm font-bold text-brand-mint">
                      {offerCount ? `${offerCount}+ offers` : "Live page"}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-cream/40">
                      Status
                    </p>
                  </div>

                  <Link
                    href={`/${country.slug}`}
                    className="tdc-btn-primary px-4 py-2.5 text-xs"
                  >
                    Explore
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {comingSoonCountries.length > 0 && (
          <div className="mt-10 border border-cream/10 bg-ink/40 p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Clock3 size={14} className="text-fog" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fog">
                Coming soon · {comingSoonCountries.length} regions
              </p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {comingSoonCountries.map((country) => (
                <li
                  key={country.slug}
                  className="inline-flex items-center gap-2 border border-cream/10 bg-cream/[0.03] px-3 py-2 text-sm text-cream/70"
                >
                  <span aria-hidden>{getFlagEmoji(country.code)}</span>
                  <span>{country.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
