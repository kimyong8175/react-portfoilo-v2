/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "-1rem 0 2rem rgba(69, 65, 67, 0.8)",
      },
    },
    colors: {
      white: "#fff",
      midnight: "#434343",
      darkblue: "#1837B5",
      black: "#000000",
      primary: "#FFFFFF",
      secondary: "#ccd6f6",
      mint: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
      green: "#64ffda",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
