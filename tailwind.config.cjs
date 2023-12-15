/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{cjs,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      colors: {
        pink: "#EF0DB0",
        gray: "#4B4664",
        purple: "#2E0F70",
        navy: "#110233",
      },
    },
  },
  plugins: [],
};
