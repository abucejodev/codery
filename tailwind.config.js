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
      fontSize: {
        ms: "10px",
      },
    },
  },
  plugins: [],
};
