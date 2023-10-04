/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_header: "url('./assests/bg-header.jpg')",
        bgl_desk: "url('./images/bg-desktop-light.jpg')",
      },
      textColor: {
        skin: {
          navy_blue: "#000080",
          golden: "#D4AF37",
          light_grey: "#F0F0F0",
          dark_burgendy_red: "#800000",
          light_beige: "#F5F5DC",
          royal_blue: "#4169E1",
          shade_white: "#EFF2F5",
          shadeOfBlue: "#0D1332",
          bgForServices: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
