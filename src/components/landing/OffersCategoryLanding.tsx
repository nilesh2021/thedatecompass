import type { OfferTab } from "@/data/datingOffersTabs";
import Image from "next/image";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-amber-600" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.floor(rating))}
      <span className="ml-1 text-stone-500">{rating}</span>
    </span>
  );
}

export default function OffersCategoryLanding({ tab }: { tab: OfferTab }) {
  return (
    <div className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-400">
            {tab.label}
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {tab.seoTitle}
          </h1>
          <p className="text-lg leading-relaxed text-stone-500">
            {tab.seoIntro}
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {tab.offers.map((offer, index) => (
            <a
              key={offer.id}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                offer.featured ? "ring-2 ring-stone-900/10" : ""
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-stone-100">
                    <Image
                      src={offer.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-stone-400">
                      #{index + 1}
                    </span>
                    <h2 className="text-xl font-semibold text-stone-900">
                      {offer.name}
                    </h2>
                  </div>
                </div>
                {offer.badge && (
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {offer.badge}
                  </span>
                )}
              </div>

              <StarRating rating={offer.rating} />
              <p className="mt-1 text-sm text-stone-400">
                {offer.reviews} reviews · {offer.bestFor}
              </p>

              <p className="mt-6 flex-1 leading-relaxed text-stone-500">
                {offer.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {offer.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full bg-stone-50 px-3 py-1 text-xs text-stone-600"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-stone-900 group-hover:text-stone-600">
                Visit {offer.name} →
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-20 border-t border-stone-200 pt-8 text-center text-sm text-stone-400">
          <div className="flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-600">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-stone-600">
              Terms
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-stone-600">
              Disclosure
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
