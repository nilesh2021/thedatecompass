"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-16 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-brand-rose/90 text-cream shadow-[0_15px_40px_rgba(255,61,110,.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-brand-rose-soft ${
  visible
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-5 opacity-0"
}`}
    >
      <ChevronUp size={22} />
    </button>
  );
}