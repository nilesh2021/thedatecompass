import type { Metadata } from "next";
import NotFoundScreen from "@/components/layout/NotFoundScreen";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundScreen />;
}
