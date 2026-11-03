import "../globals.css";
import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/layout/RootDocument";
import { rootMetadata, rootViewport } from "@/lib/rootMetadata";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = rootViewport;

export default function CzechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="cs">{children}</RootDocument>;
}
