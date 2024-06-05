/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bookmarkpurple: '#5267DF',
        bookmarkred: '#FA5959',
        bookmarkblue: '#242A45',
        bookmarkgrey: '#9194A2',
        bookmarkwhite: '#f7f7f7',
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}

