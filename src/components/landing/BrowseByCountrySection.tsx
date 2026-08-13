import Link from "next/link";
import type { CountryBrowseLink } from "@/data/countryBrowseLinks";

type BrowseByCountrySectionProps = {
  links: CountryBrowseLink[];
  title?: string;
  description?: string;
  eyebrow?: string;
  /** ink = cream-on-ink landings; violet = AI girlfriend category styling */
  tone?: "ink" | "violet";
  className?: string;
};

/**
 * Compact internal-link cluster for category / top-offer pages.
 * Pass only thematically relevant country links from the caller.
 */
export default function BrowseByCountrySection({
  links,
  title = "Explore by country",
  description = "Compare matching shortlists on our active country pages.",
  eyebrow = "Browse by country",
  tone = "ink",
  className = "",
}: BrowseByCountrySectionProps) {
  if (links.length === 0) return null;

  const isViolet = tone === "violet";

  return (
    <section
      aria-label={title}
      className={`border-t ${
        isViolet ? "border-white/10" : "border-cream/10"
      } py-10 sm:py-12 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <p
          className={
            isViolet
              ? "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400"
              : "tdc-eyebrow-mint mb-3"
          }
        >
          {eyebrow}
        </p>
        <h2
          className={
            isViolet
              ? "text-2xl font-black tracking-tight text-white sm:text-3xl"
              : "text-2xl font-extrabold tracking-tight text-cream sm:text-3xl"
          }
        >
          {title}
        </h2>
        {description ? (
          <p
            className={
              isViolet
                ? "mt-3 max-w-2xl text-sm leading-relaxed text-white/55"
                : "mt-3 max-w-2xl text-sm leading-relaxed text-fog"
            }
          >
            {description}
          </p>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isViolet
                    ? "inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-violet-400/40 hover:text-white"
                    : "inline-flex border border-cream/10 bg-ink-soft px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:border-brand-rose/40 hover:text-brand-rose"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
