/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "roboto",
    },
    extend: {
      gridTemplateRows: {
        hero: "auto 1fr auto",
      },
      gridTemplateColumns: {
        flavourGrid: "repeat(auto-fit, minmax(0, 1fr))",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1200px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      xsm: { max: "460px" },
    },
  },
  plugins: [],
}
