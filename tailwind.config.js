const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jos: "'Josefin Sans'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
