const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',

      white: '#FFFFFF',
      black: '#000000',
      backgroundSecondary:  '#F1F9FE',
      backgroundDefault: '#D9E6F6',
      primaryText: '#2E7BB4',
      secondaryText: '#388BB0',
      tertiaryText: '#2F4A71',
      primaryElement: '#6F92BB',
      anotherElement: '#5579A1',
      gray1: '#333333',
      gray2: '#5A5A5A',
      gray3: '#999999',
      gray4: '#C5C6CA',
      gray5: '#F4F4F4',
    },
    fontFamily: {
      'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
