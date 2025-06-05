/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./structure.html"],
  theme: {
    extend: {
      colors: {
        yellow: {
          200: '#fef08a',
          400: '#facc15',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'text-yellow-200',
    'text-yellow-400'
  ]
}

