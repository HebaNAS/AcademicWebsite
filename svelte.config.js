import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvex_config } from './mdsvex.config.js';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const production = process.env.NODE_ENV == 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex(mdsvex_config),
		preprocess({
			sourceMap: !production,
			plugins: [tailwindcss(), autoprefixer()],
		})
	],
	kit: {
		browser: {
			//hydrate: false,
			router: false,
		},
		prerender: {
			crawl: true,
			default: true,
		},
		adapter: adapter({
			// default options are shown
            pages: 'build',
            assets: 'build',
            // domain: 'https://www.macs.hw.ac.uk/~he12',
			fallback: 'index.html',
		}),
 		paths: {
			base: '/~he12',
		},
		/*appDir: 'app', */
		// hydrate the <div id="svelte"> element in src/app.html
		trailingSlash: 'never',
		vite: {
			css: {
			  postcss: {
				plugins: [tailwindcss(), autoprefixer()],
			  },
			},
			ssr: {
			  noExternal: ['svelte-hero-icons'],
			},
			resolve: {
			  alias: {
				$components: resolve('src/components'),
				$icons: resolve('src/components/icons'),
			  },
			}
		}
	}
};

export default config;
