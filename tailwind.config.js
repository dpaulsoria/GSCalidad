/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/plugin");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Body
        "primary-light": "#F1F5F9",
        "primary-dark": "#020617",
        "secondary-light": "#021D49",
        "secondary-dark": "#F1F5F9",
        "tertiary-light": "#14B8A6",
        "tertiary-dark": "#2DD4BF",
        "success-light": "#2DD4BF",
        "success-dark": "#14B8A6",
        "warning-light": "#FFC107",
        "warning-dark": "#FFD042",
        "danger-light": "#FF5252",
        "danger-dark": "#FF6A6A",
      },
    },
  },
  // plugins: [nativewind],
  plugins: [],
};
