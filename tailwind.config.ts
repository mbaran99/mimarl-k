import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1B18",
        plaster: "#F1ECE1",
        stone: "#DED4C2",
        verdigris: "#5B6B5D",
        brass: "#A9804F",
        clay: "#8A5A3B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(28,27,24,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(28,27,24,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
