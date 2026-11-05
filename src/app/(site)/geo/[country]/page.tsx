import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/Home/HomePage";
import { metadata as homeMetadata } from "../../page";

const COUNTRY_PARAM = /^(?:global|[a-z]{2})$/;

export const metadata: Metadata = homeMetadata;

export function generateStaticParams() {
  return ["global", "us", "gb", "ca", "au", "de", "fr", "dk"].map((country) => ({
    country,
  }));
}

export const dynamicParams = true;

type GeoHomeProps = {
  params: { country: string };
};

export default function GeoHomePage({ params }: GeoHomeProps) {
  const country = params.country?.trim().toLowerCase() ?? "";
  if (!COUNTRY_PARAM.test(country)) notFound();
  return <HomePage country={country} />;
}
