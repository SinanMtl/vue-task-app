/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1E5FDD',
          600: '#003AAA',
        },
        gray: {
          50: '#F4F5F7',
          100: '#EAEAEA',
          200: '#D9D9D9',
          400: '#ADADAD',
        },
        cold: {
          100: '#5E6C84'
        }
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      fontSize: {
        40: '40px',
        23: '23px'
      },
      borderRadius: {
        3: '3px'
      }
    },
  },
  plugins: [],
}

