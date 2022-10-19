const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#ff9def",
        accentDark: "#9151C0",
        offWhite: "#FBE3FF",
        primary: "rgb(138, 66, 255)",
        primaryDark: colors.blue[800],
        highlight: colors.yellow[500],
      },
      fontFamily: {
        title: "Uomo Expanded",
        titleBold: "Uomo Expanded Bold",
        sora: "Sora",
        poppins: "Poppins",
      },
      animation: {
        fadeUp: "fadeUp 0.1s ease-in-out forwards",
      },

      keyframes: (theme) => ({
        fadeUp: {
          "0%": {
            transform: "translateY(-12px)",
            backdropFilter: "blur(5px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
            backdropFilter: "blur(5px)",
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
