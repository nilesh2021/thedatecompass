"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRelatedOffers } from "@/lib/offerCatalog";

export default function RelatedOffers({ path }: { path?: string }) {
  const pathname = usePathname();
  const current = path ?? pathname;
  const { items, moreReviews } = getRelatedOffers(current);

  if (items.length === 0 && !moreReviews) return null;

  return (
    <section className="border-t border-white/10 bg-[#0c0c0c] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {items.length > 0 ? (
          <>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">Related offers</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-[#E83E9B]/50"
                  >
                    <span className="block font-semibold">{item.name}</span>
                    <span className="mt-1 block text-sm text-white/55">
                      {item.category}
                      {item.country ? ` · ${item.country}` : ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {moreReviews ? (
          <p className={items.length > 0 ? "mt-6 text-sm" : "text-sm"}>
            <Link href={moreReviews.href} className="font-semibold text-[#E83E9B] hover:underline">
              More reviews in {moreReviews.name}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
