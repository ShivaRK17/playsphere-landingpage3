/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bungee:['Bungee','sans-serif'],
        roboto:['Roboto','sans-serif'],
        filson:['Filson','sans-serif'],
      }
    },
  },
  plugins: [],
}