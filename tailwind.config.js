/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      second: "#2D3748",
      myWhite: "#fff",
      primary: "#4FD1C5",
      lightGray: "#A0AEC0",
      bgGray: "#F8F9FA",
      darkGreen:"#48BB78"
    },
    boxShadow: {
      subtle: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
    },
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "Inter", "Arial", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
