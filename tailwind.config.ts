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
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-instrument-serif)",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        accent: {
          DEFAULT: "#4f6b8f",
          soft: "#eef2f7",
        },
      },
      boxShadow: {
        card: "0 2px 16px rgba(28, 25, 23, 0.04)",
        "card-hover": "0 8px 32px rgba(28, 25, 23, 0.08)",
        hero: "0 8px 40px rgba(28, 25, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;