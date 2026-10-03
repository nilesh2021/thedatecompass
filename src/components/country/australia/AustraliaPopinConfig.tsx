"use client";

import { useEffect } from "react";
import {
  buildTrackedAffiliateUrl,
  captureClickId,
  getClickId,
} from "@/lib/affiliateUrl";

const GONAUGHTY_AU_URL =
  "https://t.aslr1.com/358917/8570/0?po=6456&aff_sub5=SF_006OG000004lmDN";

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
    window.crakPopInParamsOverlay = {
      url: buildTrackedAffiliateUrl(GONAUGHTY_AU_URL, getClickId()),
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
