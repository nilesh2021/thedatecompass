"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import {
  GERMANY_SPONSORED_LABEL,
  getGermanyTrackedHref,
  type GermanyOffer,
} from "@/data/germanyOffers";

const REL = "sponsored nofollow noopener noreferrer";
const OPEN_AFTER_MS = 3000;

type GermanyTimedOfferModalProps = {
  offer: GermanyOffer;
  imageSrc: string;
  imageAlt: string;
};

export default function GermanyTimedOfferModal({
  offer,
  imageSrc,
  imageAlt,
}: GermanyTimedOfferModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), OPEN_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close popup"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="germany-popup-title"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-[#ff2d87]/35 bg-[#0c1230] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/90 transition hover:bg-black/70"
          aria-label="Close"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <div className="relative h-40 overflow-hidden sm:h-48">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/35 to-transparent" />
        </div>

        <div className="relative px-5 pb-6 pt-4 sm:px-8 sm:pb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff8aa8]">
            {GERMANY_SPONSORED_LABEL} · DE & AT · 18+
          </p>
          <h2
            id="germany-popup-title"
            className="text-[1.65rem] font-black leading-tight tracking-tight sm:text-3xl"
          >
            Meet people in Germany on {offer.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            Casual dating for adults in Germany and Austria. Signup is free —
            see the provider site for pricing.
          </p>

          <TrackedAffiliateLink
            href={getGermanyTrackedHref(offer, "lp_popup")}
            placement="lp_popup"
            country="germany"
            target="_blank"
            rel={REL}
            onClick={() => {
              trackAffiliateClick(offer.name, "lp_popup", "germany");
              setOpen(false);
            }}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ff2d87] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_16px_40px_rgba(255,45,135,0.35)] transition hover:brightness-110"
          >
            Visit {offer.name} →
          </TrackedAffiliateLink>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 w-full py-2 text-center text-xs font-medium text-cream/45 transition hover:text-cream/70"
          >
            No thanks, stay on this page
          </button>
        </div>
      </div>
    </div>
  );
}
