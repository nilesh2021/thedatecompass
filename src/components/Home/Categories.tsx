"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { usaCategories } from "@/data/usaOffers";
import { trackAffiliateClick } from "@/lib/analytics";

const homeCategories = usaCategories.filter((category) =>
  ["casual", "gay-dating", "mature", "adult"].includes(category.slug)
);

export default function Categories() {
  return (
    <section id="categories" className="tdc-section-velvet py-24 font-display">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tdc-eyebrow-gold flex items-center justify-center gap-2">
            <Sparkles size={14} />
            What you&apos;re in the mood for
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Four kinds of heat
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-serif-accent text-xl italic text-cream/65">
            Casual, gay, mature, or fully adult — pick the temperature, then
            compare platforms.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeCategories.map((category) => (
            <article
              key={category.slug}
              className="group relative flex min-h-[28rem] flex-col overflow-hidden border border-[#d4af87]/15 bg-black/40"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={`${category.title} dating category`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-[#08060a]/70 to-black/20" />
                <div className="absolute inset-0 bg-brand-rose/0 mix-blend-multiply transition duration-500 group-hover:bg-brand-rose/25" />
              </div>

              <div className="relative mt-auto flex flex-1 flex-col justify-end p-6">
                <h3 className="font-serif-accent text-3xl italic text-cream">
                  {category.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#d4af87]">
                  Example: {category.offerName}
                </p>

                <p className="mt-4 text-sm leading-6 text-cream/75">
                  {category.description.replace(/ for USA users/gi, "")}
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-cream/55">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#d4af87]" />
                    Adults 18+ only
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-brand-rose" />
                    Check country availability
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  <a
                    href={category.href}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="tdc-btn-primary w-full py-3 text-xs"
                    onClick={() =>
                      trackAffiliateClick(category.offerName, "category")
                    }
                  >
                    Visit {category.offerName}
                    <ArrowRight size={14} />
                  </a>
                  <Link
                    href={
                      category.slug === "gay-dating"
                        ? "/gay-dating"
                        : category.slug === "adult"
                          ? "/top-offers/adult"
                          : category.slug === "casual"
                            ? "/top-offers"
                            : category.slug === "mature"
                              ? "/top-offers/mature"
                              : "#countries"
                    }
                    className="tdc-btn-line w-full py-3 text-xs"
                  >
                    {category.slug === "gay-dating"
                      ? "Compare gay dating"
                      : category.slug === "adult"
                        ? "Compare adult dating"
                        : category.slug === "casual"
                          ? "Compare casual dating"
                          : category.slug === "mature"
                            ? "Compare mature dating"
                            : "Browse by country"}
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
