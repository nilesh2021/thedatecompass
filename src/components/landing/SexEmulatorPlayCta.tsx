"use client";

import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";

export const SEX_EMULATOR_AFFILIATE_URL =
  "https://t.bbwafx.com/358917/9294/0?aff_sub5=SF_006OG000004lmDN";

export const SEX_EMULATOR_CTA_REL = "nofollow sponsored noopener";

export default function SexEmulatorPlayCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TrackedAffiliateLink
      href={SEX_EMULATOR_AFFILIATE_URL}
      target="_blank"
      rel={SEX_EMULATOR_CTA_REL}
      className={className}
    >
      {children}
    </TrackedAffiliateLink>
  );
}
