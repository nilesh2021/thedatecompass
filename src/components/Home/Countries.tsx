import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { countries } from "@/data/countries";

// Generate flag emoji from country code (US -> 🇺🇸)
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
      className="relative overflow-hidden bg-[#0d0d0d] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <Globe2 size={16} />
            Browse by Country
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Explore Dating Platforms
            <br />
            Around the World
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Choose your country to discover adult dating platforms
            available in your region.
          </p>

        </div>

        {/* Country Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {countries.map((country) => {

            const available = country.isAvailable;

            return (

              <article
                key={country.slug}
                className="group flex flex-col rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#E83E9B]/40 hover:shadow-[0_25px_70px_rgba(232,62,155,.18)]"
              >

                {/* Top */}

                <div className="flex items-start justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-5xl shadow-lg">
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

                {/* Country */}

                <h3 className="mt-8 text-3xl font-black text-white">
                  {country.name}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-white/65">
                  {country.description}
                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <div>

                    <p
                      className={`text-lg font-bold ${
                        available
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {available ? "Available" : "Coming Soon"}
                    </p>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Status
                    </p>

                  </div>

                  {available ? (

                    <Link
                      href={`/${country.slug}`}
                      className="group/button inline-flex items-center gap-2 rounded-full bg-[#E83E9B] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-pink-500"
                    >
                      Explore

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/button:translate-x-1"
                      />

                    </Link>

                  ) : (

                    <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/40">
                      Coming Soon
                    </span>

                  )}

                </div>

              </article>

            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <p className="mb-6 text-white/60">
            More countries will be added as new dating platforms become available.
          </p>

          <Link
            href="/usa"
            className="inline-flex items-center gap-3 rounded-full border border-[#E83E9B] px-8 py-4 font-semibold text-[#E83E9B] transition-all duration-300 hover:bg-[#E83E9B] hover:text-white"
          >
            Explore USA

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
   </section>
  );
}

