import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
