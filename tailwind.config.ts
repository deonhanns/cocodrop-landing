import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0E0C0A", ember: "#E8440A", ember2: "#FF6B35",
        cream: "#F5F0E8", clay: "#C4856A", sage: "#2D6A4F",
        gold: "#D4943A", smoke: "#1C1A18", ash: "#2E2C2A", mist: "#6B6560",
      },
    },
  },
  plugins: [],
};
export default config;
