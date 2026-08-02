import Link from "next/link";
import { ArrowRight, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <Sparkles size={16} />
            Browse Categories
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Find the Right
            <br />
            Dating Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Explore different dating categories and discover platforms
            that match your interests and relationship goals.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (

            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#E83E9B]/50 hover:shadow-[0_30px_80px_rgba(232,62,155,.18)]"
            >

              {/* Top Badge */}

              <div className="absolute right-5 top-5 rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300">
                Trending
              </div>

              {/* Icon */}

              <div
                className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-4xl shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                {category.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-3xl font-black text-white">
                {category.title}
              </h3>

              {/* Description */}

              <p className="mt-4 flex-1 leading-7 text-white/65">
                {category.description}
              </p>

              {/* Features */}

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-sm text-white/70">
                  <ShieldCheck size={16} className="text-green-400" />
                  Adults 18+ Only
                </div>

                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Globe size={16} className="text-[#E83E9B]" />
                  Available in Multiple Countries
                </div>

              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Footer */}

              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                  Explore
                </span>

                <span className="flex items-center gap-2 rounded-full bg-[#E83E9B]/10 px-4 py-2 text-sm font-semibold text-[#E83E9B] transition-all duration-300 group-hover:bg-[#E83E9B] group-hover:text-white">

                  View

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </div>

            </Link>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <Link
            href="/categories"
            className="inline-flex items-center gap-3 rounded-full bg-[#E83E9B] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
          >
            Explore All Categories

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}