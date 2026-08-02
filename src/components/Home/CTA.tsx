import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E83E9B]/15 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/15 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#E83E9B] via-[#D63384] to-[#7B174F] p-10 shadow-[0_50px_120px_rgba(232,62,155,.35)] lg:p-16">

          {/* Badge */}

          <div className="text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              <BadgeCheck size={16} />
              Start Exploring Today
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
              Discover Dating Platforms
              <br />
              Available in Your Country
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-pink-50/90">
              Compare trusted dating platforms, browse country-specific
              recommendations, and continue directly to the provider that
              best matches your interests.
            </p>

          </div>

          {/* Trust */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <ShieldCheck size={18} />
              <span className="font-medium">Adults 18+</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <Globe2 size={18} />
              <span className="font-medium">150+ Countries Covered</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <BadgeCheck size={18} />
              <span className="font-medium">Updated Weekly</span>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/usa"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#E83E9B] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              🇺🇸 Explore USA

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="#countries"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              Browse All Countries
            </Link>

          </div>

          {/* Bottom Stats */}

          <div className="mt-16 grid gap-8 border-t border-white/20 pt-10 text-center sm:grid-cols-3">

            {[
              ["190+", "Countries"],
              ["100+", "Dating Platforms"],
              ["18+", "Adults Only"],
            ].map(([number, label]) => (

              <div key={label}>

                <h3 className="text-4xl font-black text-white">
                  {number}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-pink-100/80">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}