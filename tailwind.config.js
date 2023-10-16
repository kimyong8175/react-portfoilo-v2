/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      midnight: "#434343",
      black: "#000000",
      primary: "#FFFFFF",
      secondary: "#ccd6f6",
      mint: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
      green: "#64ffda",
    },
  },
  plugins: [],
};
