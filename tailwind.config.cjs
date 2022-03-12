const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.svelte',
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    safelist: ['theme-action'],
    enabled: process.env.NODE_ENV == 'production'
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      colors: {
        'theme-bg': '#F6F0E7',
	      'theme-fg': '#A5BBCA',
	      'theme-fg-light': '#F4ECE6',
        'theme-fg-dark': '#E6DACE',
        'theme-text': '#241E2F',
        'theme-text-dark': '#303638',
        'theme-action-light': '#314951',
        'theme-action': '#284958',
        'theme-action-dark': '#05263B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
