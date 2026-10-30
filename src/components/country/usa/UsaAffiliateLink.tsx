"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";

type UsaAffiliateLinkProps = {
  href: string;
  offerName: string;
  placement: "card" | "table" | "lp_hero" | "lp_end";
  country?: "usa" | "germany" | "france" | "canada" | "australia" | "uk" | "denmark";
  className?: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function UsaAffiliateLink({
  href,
  offerName,
  placement,
  country = "usa",
  className,
  children,
  compact = false,
}: UsaAffiliateLinkProps) {
  const label = children ?? (compact ? "Visit" : `Visit ${offerName}`);

  return (
    <TrackedAffiliateLink
      href={href}
      placement={placement}
      country={country}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={() => trackAffiliateClick(offerName, placement, country)}
      aria-label={`Visit ${offerName} on external site (opens in new tab)`}
      className={className}
    >
      {label}
      {compact ? (
        <ArrowUpRight size={14} className="inline-block shrink-0" aria-hidden />
      ) : null}
    </TrackedAffiliateLink>
  );
}
