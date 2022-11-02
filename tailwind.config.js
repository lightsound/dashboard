// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter", ...defaultTheme.fontFamily.sans],
      //   display: ["Lexend", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
