import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { countries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export default function Countries() {
  return (
    <section
      id="countries"
      className="relative overflow-hidden bg-[#0d0d0d] py-24"
    >
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <Globe2 size={16} />
            Browse by country
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Dating platforms available
            <br />
            in your country
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Select your country to discover adult dating and AI companion offers
            available in your region. Live pages show current platforms; others
            are expanding soon.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => {
            const available = country.isAvailable;
            const offerCount =
              country.slug === "usa" ? usaOffers.length : null;

            return (
              <article
                key={country.slug}
                className={`group flex flex-col rounded-[28px] border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                  available
                    ? "border-[#E83E9B]/40 bg-gradient-to-b from-[#E83E9B]/10 to-white/[0.03] shadow-[0_20px_60px_rgba(232,62,155,.12)]"
                    : "border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">
                    {getFlagEmoji(country.code)}
                  </div>

                  {available ? (
                    <span className="flex items-center gap-1 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300">
                      <CheckCircle2 size={14} />
                      Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-300">
                      <Clock3 size={14} />
                      Soon
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-black text-white">
                  {country.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-white/65">
                  {available && offerCount
                    ? `Compare ${offerCount}+ dating offers across casual, gay dating, mature, and AI categories.`
                    : country.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p
                      className={`text-sm font-bold ${
                        available ? "text-green-400" : "text-yellow-400"
                      }`}
                    >
                      {available && offerCount
                        ? `${offerCount}+ offers`
                        : "Coming soon"}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                      Status
                    </p>
                  </div>

                  {available ? (
                    <Link
                      href={`/${country.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#E83E9B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-500"
                    >
                      Explore
                      <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <span className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/40">
                      Soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
