import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { usaCategories } from "@/data/usaOffers";

const homeCategories = usaCategories.filter((category) =>
  ["casual", "gay-dating", "mature", "ai"].includes(category.slug)
);

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#080808] py-24"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <Sparkles size={16} />
            Dating categories
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Browse by dating intention
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Compare platforms by category — casual dating, gay dating, mature
            dating, and AI companions. Availability depends on your country.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeCategories.map((category) => (
            <article
              key={category.slug}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E83E9B]/50"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} dating category`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-black text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    Example: {category.offerName}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-6 text-white/65">
                  {category.description.replace(/ for USA users/gi, "")}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <ShieldCheck size={14} className="text-green-400" />
                    Adults 18+ only
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Globe size={14} className="text-[#E83E9B]" />
                    Check country availability
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  <a
                    href={category.href}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#E83E9B] px-4 py-3 text-sm font-bold text-white transition hover:bg-pink-500"
                  >
                    Visit {category.offerName}
                    <ArrowRight size={14} />
                  </a>
                  <Link
                    href="#countries"
                    className="flex items-center justify-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-[#E83E9B]/50 hover:text-white"
                  >
                    Browse by country
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
