import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#080B10",
        card: "#181B21",
        text: "#F5F5F5",
        muted: "#AAB0BC",
        blue: "#2563EB",
        deepBlue: "#1E3A8A",
        accentRed: "#B91C1C",
        border: "#2A2F3A",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
