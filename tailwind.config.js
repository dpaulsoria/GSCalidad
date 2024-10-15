/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/plugin");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Body
        "body-dark": "#161d31",
        "body-light": "#f8f9fa",
        "body-second-dark": "#b4b7bd",
        "body-second-light": "#212529",
        "border-dark": "#3b4253",
        "border-light": "#dee2e6",
        "custom-control-border-dark": "#44405e",
        "custom-control-border-light": "#ced4da",

        // Typography
        "headings-dark": "#d0d2d6",
        "headings-light": "#212529",
        "label-dark": "#d0d2d6",
        "label-light": "#212529",
        "text-muted-dark": "#676d7d",
        "text-muted-light": "#6c757d",

        // Card
        "card-dark": "#283046",
        "card-light": "#ffffff",

        // Input
        "input-dark": "#283046",
        "input-light": "#ffffff",
        "input-placeholder-dark": "#676d7d",
        "input-placeholder-light": "#6c757d",
        "input-border-dark": "#404656",
        "input-border-light": "#ced4da",
        "input-disabled-dark": "#24233a",
        "input-disabled-light": "#e9ecef",
        "input-disabled-border-dark": "#444b60",
        "input-disabled-border-light": "#ced4da",

        // Switch
        "switch-dark": "#545a6a",
        "switch-light": "#e9ecef",
        "switch-disabled-dark": "#1b2337",
        "switch-disabled-light": "#e9ecef",

        // Table
        "table-dark": "#283046",
        "table-light": "#ffffff",
        "table-header-dark": "#343d55",
        "table-header-light": "#e9ecef",
        "table-row-dark": "#283046",
        "table-row-light": "#ffffff",
        "table-hover-dark": "#242b3d",
        "table-hover-light": "#f1f3f5",
        "table-striped-dark": "#242b3d",
        "table-striped-light": "#f8f9fa",

        // Modal & Pagination
        "modal-header-dark": "#161d31",
        "modal-header-light": "#ffffff",
        "pagination-dark": "#242b3d",
        "pagination-light": "#ffffff",

        // Chart & Widget
        "chart-dark": "#384056",
        "chart-light": "#ffffff",
        "widget-dark": "#384056",
        "widget-light": "#ffffff",
      },
    },
  },
  // plugins: [nativewind],
  plugins: [],
};
