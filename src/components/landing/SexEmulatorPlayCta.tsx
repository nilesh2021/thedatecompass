"use client";

import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";

export const SEX_EMULATOR_AFFILIATE_URL = "/go/sex-emulator";

export const SEX_EMULATOR_CTA_REL =
  "sponsored nofollow noopener noreferrer";

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
      placement="play_cta"
      target="_blank"
      rel={SEX_EMULATOR_CTA_REL}
      className={className}
    >
      {children}
    </TrackedAffiliateLink>
  );
}
