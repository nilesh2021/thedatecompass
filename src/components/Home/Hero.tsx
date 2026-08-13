import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Globe2, Layers3 } from "lucide-react";
import { countries, availableCountries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";
import MarqueeBand from "@/components/theme/MarqueeBand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink font-display">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_40%,rgba(255,61,110,0.18),transparent_70%)]" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <p className="tdc-eyebrow-mint mb-6 flex items-center gap-3 before:h-px before:w-8 before:bg-brand-mint before:content-['']">
            Adults 18+ · Dating by country
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] text-cream md:text-6xl xl:text-7xl">
            Find the best
            <span className="block font-serif-accent text-[1.05em] italic text-brand-rose">
              dating sites
            </span>
            for your country
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-cream/70">
            TheDateCompass is an independent comparison directory for adults.
            Browse third-party dating platforms and AI companions by country,
            compare categories, then continue to the provider that fits your
            goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#countries" className="tdc-btn-primary group">
              Browse by country
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link href="#featured" className="tdc-btn-line">
              Featured platforms
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              { number: `${countries.length}`, label: "Countries", icon: Globe2 },
              { number: `${usaOffers.length}+`, label: "Platforms", icon: Layers3 },
              { number: "18+", label: "Adults only", icon: ShieldCheck },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-cream/10 bg-cream/[0.03] p-4 transition hover:border-brand-rose/30"
              >
                <item.icon size={22} className="mb-3 text-brand-rose" />
                <p className="text-2xl font-extrabold text-cream">{item.number}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-fog">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-cream/40">
            {availableCountries.length} country page
            {availableCountries.length === 1 ? "" : "s"} live · more expanding
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="overflow-hidden border border-cream/10 shadow-hero">
            <Image
              src="/images/ai-companion-hero.png"
              alt="Discover dating platforms and AI companions by country"
              width={700}
              height={900}
              priority
              className="h-[700px] w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="absolute -bottom-6 right-6 w-72 border border-cream/10 bg-ink-soft/90 p-5 backdrop-blur-md">
            <p className="text-sm text-fog">Popular categories</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Casual", "Gay dating", "Mature", "AI"].map((item) => (
                <span
                  key={item}
                  className="bg-brand-rose/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-mint"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MarqueeBand
        items={[
          "Compare by country",
          "Adults 18+ only",
          "Independent directory",
          "AI companions",
          "Affiliate disclosure",
        ]}
      />
    </section>
  );
}
