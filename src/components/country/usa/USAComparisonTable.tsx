import Link from "next/link";
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

type USAComparisonTableProps = {
  offers?: UsaOffer[];
};

export default function USAComparisonTable({
  offers = usaOffers,
}: USAComparisonTableProps) {
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
                        <Link
                          href={reviewHref}
                          className="font-semibold text-brand-rose-soft underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
                        >
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
                          <Link
                            href={reviewHref}
                            className="text-sm font-semibold text-brand-rose-soft underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
                          >
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
