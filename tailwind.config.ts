import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        "paper-dim": "#EFEDE6",
        ink: "#12172A",
        "ink-soft": "#3A3F52",
        muted: "#6B6F80",
        navy: {
          DEFAULT: "#151B34",
          light: "#232B4D",
          dark: "#0B0E1C",
        },
        brass: {
          DEFAULT: "#9C7A3C",
          light: "#C6A468",
          dark: "#7A5E2C",
        },
        line: "#DEDBD1",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-sm": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        hero: ["5.5rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        content: "1180px",
      },
      spacing: {
        section: "9rem",
        "section-sm": "5rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/></svg>')",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
