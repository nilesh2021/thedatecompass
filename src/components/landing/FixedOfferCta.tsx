"use client";

import { useEffect, useState } from "react";
import { getTrafficStarsClickId } from "@/lib/trafficstars";
import { trackAffiliateClick } from "@/lib/analytics";

type FixedOfferCtaProps = {
  offer: {
    name: string;
    url: string;
    promo: string;
  };
  placement: string;
  ctaLabel?: string;
};

export default function FixedOfferCta({
  offer,
  placement,
  ctaLabel,
}: FixedOfferCtaProps) {
  const [clickId, setClickId] = useState<string | null>(null);

  useEffect(() => {
    const id = getTrafficStarsClickId();
    setClickId(id);
  }, []);

  const affiliateUrl = new URL(offer.url);

  if (clickId) {
    affiliateUrl.searchParams.set("aff_sub5", clickId);
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-cream/10 bg-ink-soft/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label="Offer call to action"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <p className="hidden shrink-0 text-sm font-medium text-fog sm:block">
            {offer.promo}
          </p>

          <a
            href={affiliateUrl.toString()}
            target="_self"
            rel="sponsored nofollow noopener noreferrer"
            onClick={() => trackAffiliateClick(offer.name, placement)}
            className="tdc-btn-primary flex min-w-0 flex-1 flex-none sm:px-8 !rounded-none !py-3.5 !text-sm"
          >
            {ctaLabel ?? `Start chatting on ${offer.name}`}
          </a>
        </div>

        <div className="h-14 w-14 shrink-0 sm:w-16" aria-hidden />
      </div>
    </div>
  );
}
