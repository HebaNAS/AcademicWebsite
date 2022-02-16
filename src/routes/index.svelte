
<script type="ts">
    /** @type {import('@sveltejs/kit').Load} */
	export function load({ url }) {
		return {
			redirect: '/',
			status: url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === 'https://www.macs.hw.ac.uk' ? 302 : 301
		};
	}
</script>
<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>
<p>Testing...</p>
