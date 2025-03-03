/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(94, 59%, 35%)',
        hover: '#bdf094',
        paleGreen: 'hsl(96, 75%, 89%)',
        whiteColor: 'hsl(0, 0%, 100%)',
        blackColor: 'hsl(0, 0%, 18%)',
        textColor: 'hsl(240, 1%, 48%)',
        bgColor: 'hsl(220, 10%, 94%)',
        greyText: 'rgb(190, 190, 190)',
        inputColor: 'hsl(330, 12%, 97%)',
      },
      fontSize: {
        biggest: '2.5rem',
        h1: '1.5rem',
        h2: '1.25rem',
        h3: '1rem',
        normal: '.938rem',
        small: '.813rem',
        smallest: '.75rem',
      },
      boxShadow: {
        custom: '0 2px 4px hsl(330, 12%, 97%)',
        container: '2px 2px 8px rgb(190, 190, 190)',
      },
      borderRadius: {
        custom: '8px',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

