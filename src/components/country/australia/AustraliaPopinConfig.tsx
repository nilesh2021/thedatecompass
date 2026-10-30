"use client";

import { useEffect } from "react";
import {
  appendGoParams,
  buildTrackedAffiliateUrl,
  captureClickId,
  getClickId,
} from "@/lib/affiliateUrl";

const SCRIPT_SRC = "https://crxcra.com/popin/latest/affstitial-min.js";

declare global {
  interface Window {
    crakPopInParamsOverlay?: {
      url: string;
      decryptUrl: boolean;
      contentType: string;
      coverOverlay: boolean;
      expireDays: number;
    };
  }
}

export default function AustraliaPopinConfig() {
  useEffect(() => {
    captureClickId();
    const goHref = appendGoParams("/go/gonaughty", {
      country: "australia",
      placement: "lp_mid",
    });
    window.crakPopInParamsOverlay = {
      url: `${window.location.origin}${buildTrackedAffiliateUrl(goHref, getClickId())}`,
      decryptUrl: false,
      contentType: "overlay",
      coverOverlay: true,
      expireDays: 0.01,
    };

    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
