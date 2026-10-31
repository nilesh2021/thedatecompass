"use client";

import { ArrowRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";

const heroCtaClass =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110";

type CountryHeroCtaProps = {
  href: string;
  label: string;
  placement?: string;
  country?: string;
  trackName?: string;
  target?: "_self" | "_blank";
};

export default function CountryHeroCta({
  href,
  label,
  placement,
  country,
  trackName,
  target = "_blank",
}: CountryHeroCtaProps) {
  return (
    <TrackedAffiliateLink
      href={href}
      placement={placement}
      country={country}
      target={target}
      rel="sponsored nofollow noopener noreferrer"
      className={heroCtaClass}
      onClick={
        trackName
          ? () => trackAffiliateClick(trackName, placement ?? "lp_hero", country)
          : undefined
      }
    >
      {label}
      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
        aria-hidden
      />
    </TrackedAffiliateLink>
  );
}
