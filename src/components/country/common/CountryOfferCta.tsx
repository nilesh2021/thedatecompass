"use client";

import { ArrowUpRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";

export type CountryOfferCtaVariant =
  | "germanyFeatured"
  | "germanyDefault"
  | "usaFeatured"
  | "usaDefault";

type CountryOfferCtaProps = {
  href: string;
  label: string;
  variant: CountryOfferCtaVariant;
  /** Offer name sent to GA as offer_name */
  offerName: string;
  /** Country slug/code from the calling page (e.g. usa, germany, france) */
  country: string;
  /** Click placement label; defaults to offer_card */
  placement?: string;
};

const REL = "nofollow sponsored noopener noreferrer";

const germanyFeaturedClass =
  "group relative z-10 flex min-h-[58px] w-full cursor-pointer items-stretch overflow-hidden border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_rgba(255,61,110,0.7)]";

const germanyDefaultClass =
  "group relative inline-flex min-h-[48px] w-full cursor-pointer items-stretch overflow-hidden border border-cream/30 bg-cream text-ink transition duration-200 hover:border-brand-rose hover:shadow-[4px_4px_0_0_rgba(255,61,110,0.7)] active:translate-x-px active:translate-y-px active:shadow-none sm:w-auto sm:min-w-[12rem]";

export default function CountryOfferCta({
  href,
  label,
  variant,
  offerName,
  country,
  placement = "offer_card",
}: CountryOfferCtaProps) {
  const handleClick = () => {
    trackAffiliateClick(offerName, placement, country);
  };

  if (variant === "germanyFeatured") {
    return (
      <a
        href={href}
        target="_blank"
        rel={REL}
        className={germanyFeaturedClass}
        onClick={handleClick}
      >
        <span className="flex flex-1 items-center justify-center px-5 text-sm font-extrabold uppercase tracking-[0.12em]">
          {label}
        </span>
        <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft sm:w-16">
          <ArrowUpRight
            size={20}
            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </a>
    );
  }

  if (variant === "germanyDefault") {
    return (
      <a
        href={href}
        target="_blank"
        rel={REL}
        className={germanyDefaultClass}
        onClick={handleClick}
      >
        <span className="flex flex-1 items-center justify-center px-4 text-[0.78rem] font-extrabold uppercase tracking-[0.1em]">
          {label}
        </span>
        <span className="flex w-11 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft">
          <ArrowUpRight
            size={16}
            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </a>
    );
  }

  if (variant === "usaFeatured") {
    return (
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="mt-5 block rounded-full bg-brand-rose px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-brand-rose-soft hover:text-ink gradient-hover"
        onClick={handleClick}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="mt-5 block rounded-full bg-brand-rose px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-brand-rose-soft hover:text-ink"
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
