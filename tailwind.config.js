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
        primaryDark: "#001A5C",
      },
      fontFamily: {
        title: "Uomo Expanded",
        titleBold: "Uomo Expanded Bold",
        sora: "Sora",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
