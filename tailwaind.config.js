// tailwind.config.js

export default {
  theme: {
    extend: {
      
    },
    colors: {
        'transparent': 'transparent',
        'black': '#000',
        'white': '#fff',
        'bglight': '#F6F0E7',
        'fg': '#A5BBCA',
        'fg-light': '#E7D6CC',
        'fg-dark': '#E5C6B5',
        'color-light': '#241E2F',
        'action-light': '#314951',
        'action': '#284958',
        'action-dark': '#05263B',
      },
    darkMode: 'class',
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [

  ],
  purge: {
    content: [
        './src/**/*.svelte',
    ],
    options: {
      safelist: ['hover:text-fg', 'hover:text-fg-light', 'hover:text-fg-dark', 'hover:text-color-light'],
    },
    enabled: process.env.NODE_ENV == 'production' // disable purge in dev
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}