/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  extend: {
    spacing: {
        128: '32rem'
      },
    fontFamily: {
        sans: ['Josefin Sans', 'sans-seriff'],
        alata: ['Alata'],
      },
    },
  },
  plugins: [],
}
