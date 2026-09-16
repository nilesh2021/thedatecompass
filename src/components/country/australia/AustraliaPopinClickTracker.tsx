"use client";

import { useEffect } from "react";
import { trackAffiliateClick } from "@/lib/analytics";

/**
 * Tracks CrakRevenue overlay clicks on /australia.
 * The third-party script opens the pop-in affiliate URL via window.open
 * (no React onClick available), so we intercept that navigation.
 */
export default function AustraliaPopinClickTracker() {
  useEffect(() => {
    const originalOpen = window.open.bind(window);

    window.open = ((
      url?: string | URL,
      target?: string,
      features?: string
    ) => {
      const href =
        typeof url === "string" ? url : url instanceof URL ? url.href : "";

      if (href.includes("/358917/8570/")) {
        trackAffiliateClick("GoNaughty", "crak_popin_overlay", "australia");
      }

      return originalOpen(url, target, features);
    }) as typeof window.open;

    return () => {
      window.open = originalOpen;
    };
  }, []);

  return null;
}
