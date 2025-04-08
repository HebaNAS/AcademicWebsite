import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [ 
    sveltekit()
  ],
	// Needed for base path to work correctly
	server: {
		fs: {
			allow: ['..']
		}
	}
});
