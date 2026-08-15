"use client";

import { useEffect } from "react";
import { getTrafficStarsClickId } from "@/lib/trafficstars";

export default function TrafficStarsTracker() {
  useEffect(() => {
    const clickId = getTrafficStarsClickId();

    console.log("TrafficStars Click ID:", clickId);
  }, []);

  return null;
}