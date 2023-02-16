/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      landscape: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      fontSize: {
        ms: "10px",
      },
      colors: {
        dark: "#011627",
        light: "#FDFFFC",
        brand: "#CA3CFF",
        success: "#47C200",
        warning: "#FF9F1C",
        error: "#F71735",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
