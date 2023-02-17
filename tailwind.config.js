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
        brand: "#CA3CFF",
        obsidian: "#221E22",
        quartz: "#F3F3F6",
        emerald: "#47C200",
        amber: "#ff7b00",
        ruby: "#F71735",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
