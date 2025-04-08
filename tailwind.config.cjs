/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
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
  plugins: [],
}
