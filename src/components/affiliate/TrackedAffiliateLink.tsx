"use client";

import { useEffect, useState, type AnchorHTMLAttributes } from "react";
import {
  appendGoPlacement,
  buildTrackedAffiliateUrl,
  captureClickId,
  getClickId,
} from "@/lib/affiliateUrl";

export function useTrackedAffiliateUrl(
  baseUrl: string,
  placement?: string
): string {
  const located = appendGoPlacement(baseUrl, placement);
  const [href, setHref] = useState(located);

  useEffect(() => {
    captureClickId();
    setHref(buildTrackedAffiliateUrl(located, getClickId()));
  }, [located]);

  return href;
}

type TrackedAffiliateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  placement?: string;
};

export default function TrackedAffiliateLink({
  href,
  placement,
  ...props
}: TrackedAffiliateLinkProps) {
  const trackedHref = useTrackedAffiliateUrl(appendGoPlacement(href, placement));
  return <a {...props} href={trackedHref} />;
}
