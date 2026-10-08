"use client";

import { useEffect, useRef } from "react";
import Countries from "@/components/Home/Countries";
import { useCountriesOpen } from "@/components/Home/CountriesOpen";

export default function CountriesGate() {
  const { open, takeScrollRequest } = useCountriesOpen();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !takeScrollRequest()) return;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [open, takeScrollRequest]);

  if (!open) return null;

  return (
    <div ref={ref}>
      <Countries />
    </div>
  );
}
