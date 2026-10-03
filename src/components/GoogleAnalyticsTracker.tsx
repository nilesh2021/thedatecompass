"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureCampaignUtms } from "@/lib/analytics";
import { captureClickId } from "@/lib/affiliateUrl";

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Persist click_id even when gtag has not loaded yet.
    captureClickId();
    captureCampaignUtms();

    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
    });
  }, [pathname]);

  return null;
}
