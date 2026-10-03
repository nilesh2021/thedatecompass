"use client";

import { useEffect, useState, type AnchorHTMLAttributes } from "react";
import {
  buildTrackedAffiliateUrl,
  captureClickId,
  getClickId,
} from "@/lib/affiliateUrl";

export function useTrackedAffiliateUrl(baseUrl: string): string {
  const [href, setHref] = useState(baseUrl);

  useEffect(() => {
    captureClickId();
    setHref(buildTrackedAffiliateUrl(baseUrl, getClickId()));
  }, [baseUrl]);

  return href;
}

type TrackedAffiliateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function TrackedAffiliateLink({
  href,
  ...props
}: TrackedAffiliateLinkProps) {
  const trackedHref = useTrackedAffiliateUrl(href);
  return <a {...props} href={trackedHref} />;
}
