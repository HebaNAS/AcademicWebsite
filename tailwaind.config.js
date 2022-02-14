// tailwind.config.js
import { dev } from '$app/env';

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [

  ],
  purge: {
    content: [
        './src/**/*.svelte', './*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'
    ],
    enabled: !dev // disable purge in dev
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}