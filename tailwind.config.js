/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Abhaya Libre"', 'serif'], // Agrega la fuente personalizada
      },
    },
  },
  plugins: [],
}

