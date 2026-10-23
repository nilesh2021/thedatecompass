import Link from "next/link";
import {
  getFranceReviewHref,
  type FranceOffer,
} from "@/data/countries/france";
import {
  getGermanyReviewHref,
  type GermanyOffer,
} from "@/data/germanyOffers";
import {
  getUsaReviewHref,
  type UsaOffer,
  usaOffers,
} from "@/data/usaOffers";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import UsaAffiliateLink from "@/components/country/usa/UsaAffiliateLink";

function usaAvailabilityLabel(country?: string): string {
  return country === "USA" ? "Yes" : "—";
}

function keyFocusForOffer(offer: UsaOffer): string {
  return offer.keyFocus ?? "—";
}

function ratingLabel(rating: number | null | undefined): string {
  return typeof rating === "number" ? rating.toFixed(1) : "—";
}

type USAComparisonTableProps = {
  offers?: UsaOffer[];
  germanyOffers?: GermanyOffer[];
  franceOffers?: FranceOffer[];
  variant?: "usa" | "germany" | "france";
};

const usaReviewLinkClass =
  "font-semibold text-brand-rose-soft underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose";

const germanyReviewLinkClass =
  "font-semibold text-[#ff8aa8] underline decoration-[#ff2d87]/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]";

export default function USAComparisonTable({
  offers = usaOffers,
  germanyOffers = [],
  franceOffers = [],
  variant = "usa",
}: USAComparisonTableProps) {
  if (variant === "france") {
    const showRating = franceOffers.some((offer) => offer.rating != null);

    return (
      <section
        id="france-comparison"
        aria-labelledby="france-comparison-heading"
        className="mt-12 border-t border-[#ff2d87]/25 pt-12"
      >
        <CountrySectionHeading
          variant="germany"
          eyebrow="Side-by-side overview"
          title={
            <span id="france-comparison-heading">
              Compare adult dating platforms in France
            </span>
          }
          description="A quick reference using information already shown in our listings. Visit each provider for full terms, privacy, and pricing."
        />

        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d] md:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of adult dating platforms listed for France visitors
            </caption>
            <thead>
              <tr className="border-b border-[#ff2d87]/20 bg-[#0c1230]/70">
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Site
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Best for
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Free trial/Price
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Privacy features
                </th>
                {showRating ? (
                  <th scope="col" className="px-4 py-3 font-bold text-cream">
                    Rating
                  </th>
                ) : null}
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  CTA
                </th>
              </tr>
            </thead>
            <tbody>
              {franceOffers.map((offer) => {
                const reviewHref = getFranceReviewHref(offer);
                return (
                  <tr
                    key={offer.name}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
                  >
                    <th scope="row" className="px-4 py-3.5 font-semibold text-cream">
                      <span className="block">{offer.name}</span>
                      {reviewHref ? (
                        <Link href={reviewHref} className={`${germanyReviewLinkClass} mt-1 inline-block text-xs`}>
                          Read review
                        </Link>
                      ) : null}
                    </th>
                    <td className="max-w-[200px] px-4 py-3.5 text-cream/70">
                      {offer.keyFocus}
                    </td>
                    <td className="px-4 py-3.5 text-cream/70">{offer.priceNote}</td>
                    <td className="px-4 py-3.5 text-cream/70">{offer.privacyNote}</td>
                    {showRating ? (
                      <td className="px-4 py-3.5 text-cream/70">{ratingLabel(offer.rating)}</td>
                    ) : null}
                    <td className="px-4 py-3.5">
                      <UsaAffiliateLink
                        href={offer.href}
                        offerName={offer.name}
                        placement="france_comparison_table"
                        country="france"
                        compact
                        className="inline-flex items-center gap-1 rounded-lg border border-[#ff2d87]/40 bg-[#ff2d87]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-cream transition hover:border-[#ff2d87] hover:bg-[#ff2d87]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 space-y-4 md:hidden">
          {franceOffers.map((offer) => {
            const reviewHref = getFranceReviewHref(offer);
            return (
              <li
                key={offer.name}
                className="rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d] p-5"
              >
                <h3 className="text-xl font-extrabold text-cream">{offer.name}</h3>
                {reviewHref ? (
                  <Link href={reviewHref} className={`${germanyReviewLinkClass} mt-2 inline-block text-sm`}>
                    Read review
                  </Link>
                ) : null}
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-cream/50">Best for</dt>
                    <dd className="mt-1 text-cream/80">{offer.keyFocus}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/50">Free trial/Price</dt>
                    <dd className="text-right font-medium text-cream/80">
                      {offer.priceNote}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-cream/50">Privacy features</dt>
                    <dd className="mt-1 text-cream/80">{offer.privacyNote}</dd>
                  </div>
                  {showRating ? (
                    <div className="flex justify-between gap-4">
                      <dt className="text-cream/50">Rating</dt>
                      <dd className="text-right font-medium text-cream/80">
                        {ratingLabel(offer.rating)}
                      </dd>
                    </div>
                  ) : null}
                  <div className="border-t border-[#ff2d87]/20 pt-4">
                    <UsaAffiliateLink
                      href={offer.href}
                      offerName={offer.name}
                      placement="france_comparison_table"
                      country="france"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#ff2d87] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
                    />
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs leading-relaxed text-cream/55 sm:text-sm">
          TheDateCompass may earn a commission when visitors use certain links.
          This does not mean every platform is suitable for every visitor.{" "}
          <Link
            href="/affiliate-disclosure"
            className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
          >
            Affiliate disclosure
          </Link>
        </p>
      </section>
    );
  }

  if (variant === "germany") {
    const showRating = germanyOffers.some((offer) => offer.rating != null);

    return (
      <section
        id="germany-comparison"
        aria-labelledby="germany-comparison-heading"
        className="mt-12 border-t border-[#ff2d87]/25 pt-12"
      >
        <CountrySectionHeading
          variant="germany"
          eyebrow="Side-by-side overview"
          title={
            <span id="germany-comparison-heading">
              Compare adult dating platforms in Germany
            </span>
          }
          description="A quick reference using information already shown in our listings. Visit each provider for full terms, privacy, and pricing."
        />

        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d] md:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of adult dating platforms listed for Germany visitors
            </caption>
            <thead>
              <tr className="border-b border-[#ff2d87]/20 bg-[#0c1230]/70">
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Site
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Best for
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Free trial/Price
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  Privacy features
                </th>
                {showRating ? (
                  <th scope="col" className="px-4 py-3 font-bold text-cream">
                    Rating
                  </th>
                ) : null}
                <th scope="col" className="px-4 py-3 font-bold text-cream">
                  CTA
                </th>
              </tr>
            </thead>
            <tbody>
              {germanyOffers.map((offer) => {
                const reviewHref = getGermanyReviewHref(offer);
                return (
                  <tr
                    key={offer.name}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
                  >
                    <th scope="row" className="px-4 py-3.5 font-semibold text-cream">
                      <span className="block">{offer.name}</span>
                      {reviewHref ? (
                        <Link href={reviewHref} className={`${germanyReviewLinkClass} mt-1 inline-block text-xs`}>
                          Read review
                        </Link>
                      ) : null}
                    </th>
                    <td className="max-w-[200px] px-4 py-3.5 text-cream/70">
                      {offer.keyFocus}
                    </td>
                    <td className="px-4 py-3.5 text-cream/70">{offer.priceNote}</td>
                    <td className="px-4 py-3.5 text-cream/70">{offer.privacyNote}</td>
                    {showRating ? (
                      <td className="px-4 py-3.5 text-cream/70">{ratingLabel(offer.rating)}</td>
                    ) : null}
                    <td className="px-4 py-3.5">
                      <UsaAffiliateLink
                        href={offer.href}
                        offerName={offer.name}
                        placement="germany_comparison_table"
                        country="germany"
                        compact
                        className="inline-flex items-center gap-1 rounded-lg border border-[#ff2d87]/40 bg-[#ff2d87]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-cream transition hover:border-[#ff2d87] hover:bg-[#ff2d87]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 space-y-4 md:hidden">
          {germanyOffers.map((offer) => {
            const reviewHref = getGermanyReviewHref(offer);
            return (
              <li
                key={offer.name}
                className="rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d] p-5"
              >
                <h3 className="text-xl font-extrabold text-cream">{offer.name}</h3>
                {reviewHref ? (
                  <Link href={reviewHref} className={`${germanyReviewLinkClass} mt-2 inline-block text-sm`}>
                    Read review
                  </Link>
                ) : null}
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-cream/50">Best for</dt>
                    <dd className="mt-1 text-cream/80">{offer.keyFocus}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/50">Free trial/Price</dt>
                    <dd className="text-right font-medium text-cream/80">
                      {offer.priceNote}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-cream/50">Privacy features</dt>
                    <dd className="mt-1 text-cream/80">{offer.privacyNote}</dd>
                  </div>
                  {showRating ? (
                    <div className="flex justify-between gap-4">
                      <dt className="text-cream/50">Rating</dt>
                      <dd className="text-right font-medium text-cream/80">
                        {ratingLabel(offer.rating)}
                      </dd>
                    </div>
                  ) : null}
                  <div className="border-t border-[#ff2d87]/20 pt-4">
                    <UsaAffiliateLink
                      href={offer.href}
                      offerName={offer.name}
                      placement="germany_comparison_table"
                      country="germany"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#ff2d87] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
                    />
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs leading-relaxed text-cream/55 sm:text-sm">
          TheDateCompass may earn a commission when visitors use certain links.
          This does not mean every platform is suitable for every visitor.{" "}
          <Link
            href="/affiliate-disclosure"
            className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87]"
          >
            Affiliate disclosure
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section
      id="usa-comparison"
      aria-labelledby="usa-comparison-heading"
      className="border-t border-white/10 bg-ink px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <CountrySectionHeading
          variant="usa"
          eyebrow="Side-by-side overview"
          title={
            <span id="usa-comparison-heading">
              Compare adult dating platforms in the USA
            </span>
          }
          description="A quick reference using information already shown in our listings. Visit each provider for full terms, privacy, and pricing."
        />

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] md:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of adult dating platforms listed for USA visitors
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Platform
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Category
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Available in USA
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Key focus
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Review
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-white/90">
                  Visit
                </th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => {
                const reviewHref = getUsaReviewHref(offer);
                return (
                  <tr
                    key={offer.name}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3.5 font-semibold text-white"
                    >
                      {offer.name}
                    </th>
                    <td className="px-4 py-3.5 text-white/70">{offer.category}</td>
                    <td className="px-4 py-3.5 text-white/70">
                      {usaAvailabilityLabel(offer.country)}
                    </td>
                    <td className="max-w-[200px] px-4 py-3.5 text-white/65">
                      {keyFocusForOffer(offer)}
                    </td>
                    <td className="px-4 py-3.5">
                      {reviewHref ? (
                        <Link href={reviewHref} className={usaReviewLinkClass}>
                          Read review
                        </Link>
                      ) : (
                        <span className="text-white/45">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <UsaAffiliateLink
                        href={offer.href}
                        offerName={offer.name}
                        placement="usa_comparison_table"
                        compact
                        className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:border-brand-rose/50 hover:bg-brand-rose/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <ul className="mt-10 space-y-4 md:hidden">
          {offers.map((offer) => {
            const reviewHref = getUsaReviewHref(offer);
            return (
              <li
                key={offer.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="font-serif text-xl font-bold text-white">
                  {offer.name}
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/50">Category</dt>
                    <dd className="text-right font-medium text-white/80">
                      {offer.category}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-white/50">Available in USA</dt>
                    <dd className="text-right font-medium text-white/80">
                      {usaAvailabilityLabel(offer.country)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/50">Key focus</dt>
                    <dd className="mt-1 text-white/75">
                      {keyFocusForOffer(offer)}
                    </dd>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div>
                      <dt className="sr-only">Review</dt>
                      <dd>
                        {reviewHref ? (
                          <Link href={reviewHref} className={`text-sm ${usaReviewLinkClass}`}>
                            Read review
                          </Link>
                        ) : (
                          <span className="text-sm text-white/45">Review —</span>
                        )}
                      </dd>
                    </div>
                    <UsaAffiliateLink
                      href={offer.href}
                      offerName={offer.name}
                      placement="usa_comparison_table"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-rose px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
                    />
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs leading-relaxed text-white/55 sm:text-sm">
          TheDateCompass may earn a commission when visitors use certain links.
          This does not mean every platform is suitable for every visitor.{" "}
          <Link
            href="/affiliate-disclosure"
            className="font-semibold text-brand-rose-soft underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
          >
            Affiliate disclosure
          </Link>
        </p>
      </div>
    </section>
  );
}
