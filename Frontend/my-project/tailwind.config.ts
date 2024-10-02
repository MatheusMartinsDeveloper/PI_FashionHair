import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        CinzaClaro: "#F0F0F0",
        PretoSuave: "#333333",
        CoralVibrante: "#FF6F61",
        Branco: "#FFFFFF",
        CinzaMedio: "#B0B0B0"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
