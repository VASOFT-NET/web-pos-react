module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "brand-blue": "#25aae1",
        "brand-red": "#ed4d3a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
