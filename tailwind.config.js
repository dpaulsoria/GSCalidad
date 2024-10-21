/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/plugin");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Body
        "primary-light": "#F1F5F9",
        "primary-darck": "#020617",
        "secondary-light": "#1C2545",
        "secondary-dark": "#F1F5F9",
        "tertiary-light": "#14B8A6",
        "tertiary-dark": "#2DD4BF",
      },
    },
  },
  // plugins: [nativewind],
  plugins: [],
};
