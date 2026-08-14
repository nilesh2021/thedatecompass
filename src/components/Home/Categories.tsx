import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { usaCategories } from "@/data/usaOffers";

const homeCategories = usaCategories.filter((category) =>
  ["casual", "gay-dating", "mature", "adult"].includes(category.slug)
);

export default function Categories() {
  return (
    <section id="categories" className="tdc-section-pitch py-24 font-display">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tdc-eyebrow flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Dating categories
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Browse by dating intention
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-serif-accent text-xl italic text-cream/65">
            Compare platforms by category — casual, gay dating, mature, and adult
            dating.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeCategories.map((category) => (
            <article
              key={category.slug}
              className="group flex flex-col overflow-hidden border border-cream/10 bg-cream/[0.03] transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} dating category`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-extrabold text-cream">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-fog">
                    Example: {category.offerName}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-6 text-cream/65">
                  {category.description.replace(/ for USA users/gi, "")}
                </p>

                <div className="mt-4 space-y-2 text-xs text-fog">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-brand-mint" />
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
