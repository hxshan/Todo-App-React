/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily: {
      'JosefinSans': ['Josefin Sans', 'sans-serif']
    },
    colors:{
      'Bright-Blue':'#3a7bfd',
      'Check-Background-From':'#57ddff',
      'Check-Background-To':'#c058f3',
      'Very-Light-Gray':'#fafafa',
      'Very-Light-Grayish-Blue':'#e4e5f1',
      'Light-Grayish-Blue':'#d2d3db',
      'Dark-Grayish-Blue':'#9394a5',
      'Very-Dark-Grayish-Blue':'#484b6a',

      'Very-Dark-Blue':'#161722',
      'Very-Dark-Desaturated-Blue':'#25273c',
      'Light-Grayish-Blue':'#cacde8',
      'Dark-Grayish-Blue':'#777a92',
      'Very-Dark-Grayish-Blue':'#4d5066'
    }

  },
  plugins: [],
}

