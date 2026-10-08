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
    <section className="relative overflow-hidden bg-[#0c1230] font-display">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 78% 42%, rgba(255,45,135,0.28), transparent 62%), radial-gradient(ellipse 40% 35% at 12% 80%, rgba(40,70,160,0.2), transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="animate-fade-up">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87] mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ff2d87]" aria-hidden />
            After dark · Adults 18+
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.045em] text-cream md:text-6xl xl:text-7xl">
            Dating, desire
            <span className="mt-1 block font-serif-accent text-[1.08em] font-normal italic text-[#ff2d87]">
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
            <Link href="#countries" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110">
              Find your country
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link href="#featured" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ff2d87]/50 bg-transparent px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff2d87]">
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
                className="rounded-2xl border border-[#ff2d87]/30 bg-[#141a3d]/80 p-4 backdrop-blur-sm transition hover:border-[#ff2d87]"
              >
                <item.icon size={20} className="mb-3 text-[#ff2d87]" />
                <p className="text-2xl font-extrabold text-cream">{item.number}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#ff2d87]/80">
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
                className={`group relative overflow-hidden rounded-3xl border border-[#ff2d87]/30 ${visual.className}`}
              >
                <Image
                  src={visual.image}
                  alt={visual.name}
                  width={640}
                  height={800}
                  priority={index === 0}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-transparent to-black/10" />
                <div className="absolute inset-0 bg-[#ff2d87]/0 mix-blend-multiply transition duration-500 group-hover:bg-[#ff2d87]/20" />
                <p className="absolute bottom-4 left-4 font-serif-accent text-lg italic text-cream">
                  {visual.name}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-[#ff2d87]/35 bg-[#141a3d]/95 p-4 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff2d87]">
              Moods we compare
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Flirty", "Gay", "Mature", "Adult"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ff2d87]/40 bg-[#ff2d87]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white"
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
