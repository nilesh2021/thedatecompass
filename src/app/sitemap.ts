import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
