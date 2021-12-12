
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gtw: ['GT Walsheim', ...defaultTheme.fontFamily.sans],
        gtwc: "'GT Walsheim Condensed', serif",
      },
      colors: {
        pink: '#E6128C',
      },
      backgroundImage: {
        'header-desktop': "linear-gradient(360deg, rgba(133,23,137,0.85) 0%, rgba(100, 28, 152, 0.85) 33%, rgba(60, 107, 172, 0.85) 55%, rgba(82, 187, 235, 1) 100%), url('/images/bg_header.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}