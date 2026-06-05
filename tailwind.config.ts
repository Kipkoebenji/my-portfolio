import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
    
      fontFamily: {
        sans: ["var(--font-lexend)"],
        display: ["var(--font-lexend)"],
      }
      
    },
  },
  plugins: [],
};

export default config;
