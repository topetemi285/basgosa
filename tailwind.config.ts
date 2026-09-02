import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F1E6",
        cream: "#FBF7F0",
        ink: "#2A1810",
        brown: {
          DEFAULT: "#3D2418",
          deep: "#24140E",
          soft: "#6A4A38",
        },
        orange: {
          DEFAULT: "#E67A22",
          deep: "#C45C12",
          pale: "#F8D9B8",
        },
        gold: "#C4A15A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1160px",
      },
      boxShadow: {
        lift: "0 18px 50px -24px rgba(42, 24, 16, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
