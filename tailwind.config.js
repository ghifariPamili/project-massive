/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#48CAE4',
        customCyan: '#ADE8F4',
        colorPrimer: '#03045E',
        colorRating: '#F6931C',
      },
    },
  },
  plugins: [],
}