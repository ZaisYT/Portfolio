import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        primary: '#ff8300',
        secondary: '#fc854a',
        accent: '#00d2a8'
      },
      fontFamily: {
        "Lilita_One": ['Lilita One', 'serif'],
        "Afacad_Flux": ['Afacad Flux', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
