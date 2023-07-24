/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        SoftRed: 'hsl(7, 99%, 70%)',
        Yellow: 'hsl(51, 100%, 49%)',
        Darkblue: 'hsl(198, 62%, 26%)',
        GrayishBlue: 'hsl(210, 4%, 67%)',
        DarkGrayishBlue: 'hsl(232, 10%, 55%)',
        DarkModerateCyan: 'hsl(168, 34%, 41%)',
        VeryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        DarkdesaturatedCyan: 'hsl(167, 40%, 24%)',
        VeryDarkDesaturatedBlue: ' hsl(212, 27%, 19%)'
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif']
      },
      screens: {
        tablet: '700px',
        desktop: '1440px'
      }
    }
  },
  plugins: []
}
