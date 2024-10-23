import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Coral: "#FF6F61",
        CoralEscuro: "#D95B50",
        Branco: "#FFFFFF",
        CinzaClaro: "#F0F0F0",
        CinzaEscuro: "#333333"
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
