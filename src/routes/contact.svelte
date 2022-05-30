
<script type="ts">
	import Contact from '$lib/Contact.svelte';

	export const prerender = true;
    
	// /** @type {import('@sveltejs/kit').Load} */
	// export function load({ url }) {
	// 	return {
	// 		redirect: '/contact',
	// 		status: url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === 'https://www.macs.hw.ac.uk' ? 302 : 301
	// 	};
	// }
</script>

<Contact />
