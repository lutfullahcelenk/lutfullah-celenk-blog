module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // kaushan: ['Kaushan Script'], // UGLY FONT :(
      oswald: ['Oswald'],
      rubik: ['Rubik'],
    },
    extend: {
      colors: {
        green: {
          default: '#00f260',
        },
        maroon: {
          default: '#79155B',
          700: '#5C0F4D',
          600: '#8F1C6A',
          500: '#C23373',
          400: '#D14C8A',
          300: '#E26DA7',
          200: '#F2A8D1',
          100: '#F9DDEB',
        },
        red: {
          default: '#900C3F',
          700: '#c9184a',
          800:'#D2001A',
          900: '#522546',
          500:'#C70039'

        },
        purple: {
          default: '#BEADFA',
          300: '#D0BFFF',
          200: '#DFCCFB',
        },
        dark: {
          default: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  plugins: [],
};
