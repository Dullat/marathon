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
      animation: {
        marquee: "slide 20s linear infinite",
        marquee2: "slide2 20s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slide2: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
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
