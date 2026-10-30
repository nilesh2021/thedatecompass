"use client";

import { useEffect, useState, type AnchorHTMLAttributes } from "react";
import {
  appendGoParams,
  buildTrackedAffiliateUrl,
  captureClickId,
  getClickId,
} from "@/lib/affiliateUrl";

export function useTrackedAffiliateUrl(
  baseUrl: string,
  placement?: string,
  country?: string
): string {
  const located = appendGoParams(baseUrl, { placement, country });
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
  country?: string;
};

export default function TrackedAffiliateLink({
  href,
  placement,
  country,
  ...props
}: TrackedAffiliateLinkProps) {
  const trackedHref = useTrackedAffiliateUrl(href, placement, country);
  return <a {...props} href={trackedHref} />;
}
