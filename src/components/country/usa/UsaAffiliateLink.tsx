"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";

type UsaAffiliateLinkProps = {
  href: string;
  offerName: string;
  placement:
    | "usa_offer_card"
    | "usa_comparison_table"
    | "usa_review_hero"
    | "usa_review_footer"
    | "germany_comparison_table"
    | "germany_review_hero"
    | "germany_review_footer"
    | "france_comparison_table"
    | "france_review_hero"
    | "france_review_footer";
  country?: "usa" | "germany" | "france";
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
