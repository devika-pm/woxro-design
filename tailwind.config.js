/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path is correct
    ],
    theme: {
      extend: {
        fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },},
    },
    plugins: [],
  }