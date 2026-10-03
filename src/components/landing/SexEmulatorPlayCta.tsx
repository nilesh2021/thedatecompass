"use client";

import { useSearchParams } from "next/navigation";

export const SEX_EMULATOR_AFFILIATE_URL =
  "https://t.bbwafx.com/358917/9294/0?aff_sub5=SF_0060G000004lmDN";

export const SEX_EMULATOR_CTA_REL = "nofollow sponsored noopener";

export function buildSexEmulatorAffiliateUrl(clickId: string | null) {
  const trimmed = clickId?.trim();
  if (!trimmed) return SEX_EMULATOR_AFFILIATE_URL;

  const url = new URL(SEX_EMULATOR_AFFILIATE_URL);
  url.searchParams.set("aff_sub", trimmed);
  return url.toString();
}

export default function SexEmulatorPlayCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const clickId = useSearchParams().get("click_id");

  return (
    <a
      href={buildSexEmulatorAffiliateUrl(clickId)}
      target="_blank"
      rel={SEX_EMULATOR_CTA_REL}
      className={className}
    >
      {children}
    </a>
  );
}
