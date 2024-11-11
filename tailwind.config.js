/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%, 100%': { backgroundColor: 'red' },
          '25%': { backgroundColor: 'green' },
          '50%': { backgroundColor: 'yellow' },
          '75%': { backgroundColor: 'blue' },
        },
      },
      animation: {
        rainbow: 'rainbow 4s linear infinite',
      },
    },
  },
  plugins: [],
}