"use client";

import { useEffect } from "react";
import {
  captureCampaignUtms,
  getTrafficStarsClickId,
} from "@/lib/analytics";

export default function TrafficStarsTracker() {
  useEffect(() => {
    captureCampaignUtms();

    // Capture TrafficStars click ID from landing URL
    getTrafficStarsClickId();
  }, []);

  return null;
}