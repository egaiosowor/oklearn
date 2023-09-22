/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      'wood': 'Irish Grover, cursive',
    },
    extend: {},
  },
  plugins: [],
}

