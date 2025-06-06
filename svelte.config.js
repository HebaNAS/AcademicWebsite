import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mdsvex_config } from './mdsvex.config.js';

const production = process.env.NODE_ENV == 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex(mdsvex_config),
  ],
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      //domain: process.env.NODE_ENV === 'development' ? 'http://localhost:5173/~he4002' : 'https://www.macs.hw.ac.uk/~he4002',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : '/~he4002',
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      entries: ['*', '/blog/*']
    },
  }
};

export default config;
