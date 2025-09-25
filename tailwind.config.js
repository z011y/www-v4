/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["'Jacquard 12'", "serif"],
      sans: ["Inter", "-apple-system", "Segoe UI", "sans-serif"],
      mono: ["'Fira Code'", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      gray: {
        100: "rgb(242, 242, 247)",
        200: "rgb(229, 229, 234)",
        300: "rgb(209, 209, 214)",
        400: "rgb(199, 199, 204)",
        500: "rgb(174, 174, 178)",
        600: "rgb(142, 142, 147)",
        700: "rgb(99, 99, 102)",
        800: "rgb(72, 72, 74)",
        900: "rgb(58, 58, 60)",
        1000: "rgb(44, 44, 46)",
        1100: "rgb(28, 28, 30)",
      },
      blue: "#8172F4",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
