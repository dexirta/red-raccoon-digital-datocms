module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      telescope: ['Annie Use Your Telescope']
    },

    extend: {
      colors: {
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125'
        },
        raccoonred: {
          darkest: '#2D142C',
          dark: '#510A32',
          DEFAULT: '#801336',
          light: '#C72C41',
          lightest: '#EE4540'
        }
      }
    }
  },
  plugins: []
};
