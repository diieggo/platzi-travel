/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "tertiary": "#61AEC9"
      },
      backgroundImage: {
        sanFranciscoMobile: "url('../imgs/san_francisco_mobile.webp')",
        sanFranciscoDesktop: "url('../imgs/san_francisco_desktop.webp')",
        chicago: "url('../imgs/chicago.webp')",
        LA: "url('../imgs/la.webp')",
        miami: "url('../imgs/miami.webp')",
        bali: "url('../imgs/bali.webp')",
        new_york: "url('../imgs/city_newyork.webp')",
        norway: "url('../imgs/city_norway.webp')",
        seattle: "url('../imgs/city_seattle.webp')",
        switzerland: "url('../imgs/city_switzerland.webp')",
        yosemite: "url('../imgs/city_yosemite.webp')",
        sydney: "url('../imgs/city_sydney.webp')"
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
};
