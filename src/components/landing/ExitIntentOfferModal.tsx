"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const SESSION_KEY = "tdc-exit-intent-shown";
const REL = "sponsored nofollow noopener noreferrer";

type ExitIntentOfferModalProps = {
  affiliateUrl: string;
  offerName: string;
  onTrackClick: (placement: string) => void;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ExitIntentOfferModal({
  affiliateUrl,
  offerName,
  onTrackClick,
  imageSrc,
  imageAlt,
}: ExitIntentOfferModalProps) {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  const markShown = useCallback(() => {
    shownRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode */
    }
  }, []);

  const show = useCallback(() => {
    if (shownRef.current) return;
    markShown();
    setOpen(true);
  }, [markShown]);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        shownRef.current = true;
      }
    } catch {
      /* private mode */
    }

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    let scrolledPastFold = false;

    const onMouseOut = (event: MouseEvent) => {
      if (isCoarse || shownRef.current) return;
      if (event.relatedTarget) return;
      if (event.clientY > 12) return;
      show();
    };

    const onScroll = () => {
      if (window.scrollY > 280) scrolledPastFold = true;
      if (!isCoarse || shownRef.current || !scrolledPastFold) return;
      if (window.scrollY <= 8) show();
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close popup"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#120e18] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-rose/30 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#b794f6]/20 blur-[70px]" />

        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/90 transition hover:bg-black/70"
          aria-label="Close"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        {imageSrc ? (
          <div className="relative h-36 overflow-hidden sm:h-44">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className="object-cover object-top"
              sizes="(max-width: 512px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120e18] via-[#120e18]/40 to-transparent" />
          </div>
        ) : null}

        <div className="relative px-5 pb-6 pt-4 sm:px-8 sm:pb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b794f6]">
            Wait — before you go
          </p>
          <h2
            id="exit-intent-title"
            className="text-[1.65rem] font-black leading-tight tracking-tight sm:text-3xl"
          >
            Your AI companion is still waiting on{" "}
            <span className="bg-gradient-to-r from-brand-rose to-[#b794f6] bg-clip-text text-transparent">
              {offerName}
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Sign up in minutes and start a private chat. Free to try — adults
            18+.
          </p>

          <a
            href={affiliateUrl}
            target="_blank"
            rel={REL}
            onClick={() => {
              onTrackClick("exit-intent");
              close();
            }}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-rose px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,61,110,0.35)] transition hover:bg-brand-rose-soft"
          >
            Continue · Visit Offer →
          </a>

          <button
            type="button"
            onClick={close}
            className="mt-3 w-full py-2 text-center text-xs font-medium text-white/45 transition hover:text-white/70"
          >
            No thanks, stay on this page
          </button>
        </div>
      </div>
    </div>
  );
}
