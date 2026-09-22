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
        bkfa: {
          bg: "#FFFFFF",
          bgSoft: "#F8FAFC",
          bgCard: "#FFFFFF",
          navy: "#0A192F",
          navyDeep: "#060F1E",
          navySoft: "#1E293B",
          navyLight: "#1E3A8A",
          lemon: "#76C816",
          lemonDark: "#5A9E0E",
          lemonLight: "#9EF01A",
          lemonBg: "#F4FCE3",
          orange: "#FF6B00",
          orangeDeep: "#E05300",
          orangeLight: "#FF8C38",
          orangeBg: "#FFF4ED",
          border: "#E2E8F0",
          borderDark: "#CBD5E1",
          textPrimary: "#0F172A",
          textSecondary: "#475569",
          textMuted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        clean: "0 4px 20px -2px rgba(10, 25, 47, 0.06), 0 2px 6px -1px rgba(10, 25, 47, 0.04)",
        cleanHover: "0 12px 32px -4px rgba(10, 25, 47, 0.12), 0 4px 12px -2px rgba(10, 25, 47, 0.06)",
        glowLemon: "0 0 25px -4px rgba(118, 200, 22, 0.45)",
        glowOrange: "0 0 25px -4px rgba(255, 107, 0, 0.4)",
        glowNavy: "0 0 25px -4px rgba(10, 25, 47, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
