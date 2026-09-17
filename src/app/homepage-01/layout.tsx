import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheDateCompass",
  description: "Compare dating sites and AI girlfriend platforms worldwide.",
  alternates: {
    canonical: "https://www.thedatedcompass.com/homepage-01",
  },
};

export default function Homepage01Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
