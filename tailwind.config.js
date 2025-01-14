/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      lime: colors.lime,
      red: colors.red,
      neutral: colors.neutral,
      background: '#1a1a1a',
      primary: '#ff8300',
      secondary: '#fc854a',
      accent: '#00d2a8'
    },
    extend: {
      fontFamily: {
        "Lilita_One": ['Lilita One', 'serif'],
        "Afacad_Flux": ['Afacad Flux', 'serif']
      }
    },
  },
  plugins: [],
}