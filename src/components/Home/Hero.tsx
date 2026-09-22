import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Globe2, Layers3 } from "lucide-react";
import { countries, availableCountries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";
import { adultImages } from "@/data/adultOfferImages";
import MarqueeBand from "@/components/theme/MarqueeBand";

const heroVisuals = [
  {
    name: "Casual nights",
    image: adultImages.portraitA,
    className: "row-span-2 h-[420px] xl:h-[520px]",
  },
  {
    name: "Gay dating",
    image: adultImages.gay,
    className: "h-[200px] xl:h-[250px]",
  },
  {
    name: "Mature desire",
    image: adultImages.stairs,
    className: "h-[200px] xl:h-[250px]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08060a] font-display">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 78% 42%, rgba(255,61,110,0.28), transparent 62%), radial-gradient(ellipse 40% 35% at 12% 80%, rgba(212,175,135,0.08), transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="animate-fade-up">
          <p className="tdc-eyebrow-gold mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af87]" aria-hidden />
            After dark · Adults 18+
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.045em] text-cream md:text-6xl xl:text-7xl">
            Dating, desire
            <span className="mt-1 block font-serif-accent text-[1.08em] font-normal italic text-brand-rose">
              and chemistry
            </span>
            <span className="mt-1 block text-[0.72em] font-semibold tracking-[-0.03em] text-cream/80">
              curated by country.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-cream/68">
            A grown-up directory for late-night browsing. Compare adult dating
            platforms and AI companions where you live — then slip through to
            the provider that matches your mood.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#countries" className="tdc-btn-primary group">
              Find your country
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link href="#featured" className="tdc-btn-line">
              Tonight&apos;s platforms
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {[
              { number: `${countries.length}`, label: "Countries", icon: Globe2 },
              { number: `${usaOffers.length}+`, label: "Platforms", icon: Layers3 },
              { number: "18+", label: "Adults only", icon: ShieldCheck },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[#d4af87]/20 bg-black/30 p-4 backdrop-blur-sm transition hover:border-brand-rose/45"
              >
                <item.icon size={20} className="mb-3 text-[#d4af87]" />
                <p className="text-2xl font-extrabold text-cream">{item.number}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#d4af87]/80">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-cream/40">
            {availableCountries.length} country pages live · more expanding
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-3">
            {heroVisuals.map((visual, index) => (
              <div
                key={visual.name}
                className={`group relative overflow-hidden border border-[#d4af87]/15 ${visual.className}`}
              >
                <Image
                  src={visual.image}
                  alt={visual.name}
                  width={640}
                  height={800}
                  priority={index === 0}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-transparent to-black/10" />
                <div className="absolute inset-0 bg-brand-rose/0 mix-blend-multiply transition duration-500 group-hover:bg-brand-rose/20" />
                <p className="absolute bottom-4 left-4 font-serif-accent text-lg italic text-cream">
                  {visual.name}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-5 left-6 right-6 border border-[#d4af87]/25 bg-[#0c090b]/90 p-4 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af87]">
              Moods we compare
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Flirty", "Gay", "Mature", "Adult"].map((item) => (
                <span
                  key={item}
                  className="border border-brand-rose/30 bg-brand-rose/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cream"
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
          "After dark only",
          "Adults 18+",
          "Desire by country",
          "Independent directory",
          "Affiliate disclosure",
        ]}
      />
    </section>
  );
}
