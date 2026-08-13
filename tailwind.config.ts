import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-figtree)",
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-syne)",
          "Syne",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        "serif-accent": [
          "var(--font-instrument-serif)",
          "Instrument Serif",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#0a0b0d",
          soft: "#16181c",
          deep: "#050506",
        },
        stone: "#ece8e2",
        fog: "#b8b3ab",
        cream: "#faf9f7",
        brand: {
          rose: "#ff3d6e",
          "rose-soft": "#ff6b8f",
          mint: "#7dffc3",
        },
        accent: {
          DEFAULT: "#ff3d6e",
          soft: "#ff6b8f",
        },
      },
      boxShadow: {
        card: "0 2px 16px rgba(10, 11, 13, 0.06)",
        "card-hover": "0 8px 32px rgba(10, 11, 13, 0.1)",
        hero: "0 8px 40px rgba(10, 11, 13, 0.12)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
