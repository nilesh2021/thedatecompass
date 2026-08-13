import type { OfferTab } from "@/data/datingOffersTabs";
import Image from "next/image";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-brand-mint" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.floor(rating))}
      <span className="ml-1 text-fog">{rating}</span>
    </span>
  );
}

export default function OffersCategoryLanding({ tab }: { tab: OfferTab }) {
  return (
    <div className="px-6 py-16 font-display lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <p className="tdc-eyebrow mb-4">{tab.label}</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
            {tab.seoTitle}
          </h1>
          <p className="text-lg leading-relaxed text-fog">{tab.seoIntro}</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {tab.offers.map((offer, index) => (
            <a
              key={offer.id}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col border border-cream/10 bg-ink-soft p-8 transition hover:-translate-y-0.5 hover:border-brand-rose/30 ${
                offer.featured ? "ring-1 ring-brand-rose/25" : ""
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden border border-cream/10 bg-ink">
                    <Image
                      src={offer.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-fog">
                      #{index + 1}
                    </span>
                    <h2 className="text-xl font-bold text-cream">{offer.name}</h2>
                  </div>
                </div>
                {offer.badge && (
                  <span className="bg-brand-rose/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-rose">
                    {offer.badge}
                  </span>
                )}
              </div>

              <StarRating rating={offer.rating} />
              <p className="mt-1 text-sm text-fog">
                {offer.reviews} reviews · {offer.bestFor}
              </p>

              <p className="mt-6 flex-1 leading-relaxed text-cream/65">
                {offer.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {offer.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border border-cream/10 px-3 py-1 text-xs text-fog"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-mint group-hover:text-cream">
                Visit {offer.name} →
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-20 border-t border-cream/10 pt-8 text-center text-sm text-fog">
          <div className="flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-cream">
              Disclosure
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
