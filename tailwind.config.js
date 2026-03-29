/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A", // Charcoal
        secondary: "#262626", // Lighter Charcoal
        accent: "#D4AF37", // Gold
        gold: {
          light: "#F1D279",
          DEFAULT: "#D4AF37",
          dark: "#A6892C",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
