import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Globe2, Layers3 } from "lucide-react";
import { countries, availableCountries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080808]">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#E83E9B]/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.02),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-300 backdrop-blur-xl">
            Adults 18+ · Dating offers by country
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">
            Find the best
            <span className="block bg-gradient-to-r from-[#E83E9B] via-pink-400 to-[#ff7bc4] bg-clip-text text-transparent">
              dating sites
            </span>
            for your country
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
            TheDateCompass is an independent comparison directory for adults.
            Browse third-party dating platforms and AI companions by country,
            compare categories, then continue to the provider that fits your
            goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#countries"
              className="group inline-flex items-center rounded-full bg-[#E83E9B] px-8 py-4 font-semibold text-white shadow-xl shadow-pink-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              Browse by country
              <ArrowRight
                size={18}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#featured"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-500 hover:bg-white/10"
            >
              Featured platforms
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              {
                number: `${countries.length}`,
                label: "Countries",
                icon: Globe2,
              },
              {
                number: `${usaOffers.length}+`,
                label: "Platforms",
                icon: Layers3,
              },
              {
                number: "18+",
                label: "Adults only",
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-pink-500/30 hover:bg-white/10"
              >
                <item.icon size={22} className="mb-3 text-[#E83E9B]" />
                <p className="text-2xl font-black text-white">{item.number}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-white/40">
            {availableCountries.length} country page
            {availableCountries.length === 1 ? "" : "s"} live · more expanding
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-[#E83E9B]/25 blur-[120px]" />

          <div className="absolute -left-8 top-10 z-20 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-pink-300">
              Country based
            </p>
            <p className="mt-1 font-bold text-white">Dating directory</p>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(0,0,0,.55)]">
            <Image
              src="/images/ai-companion-hero.png"
              alt="Discover dating platforms and AI companions by country"
              width={700}
              height={900}
              priority
              className="h-[700px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 right-6 w-72 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm text-gray-300">Popular categories</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Casual", "Gay dating", "Mature", "AI"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
