<script>
  import Meta from '$lib/Meta.svelte';
  import Footer from '$lib/Footer.svelte';
  import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
  import Header from '$lib/Header.svelte';
  import { navigating } from '$app/stores';
  import '../css/app.css';
</script>

<Meta />

{#if $navigating}
	<PreloadingIndicator />
{/if}

<Header />

<div class="custom-container">
  <slot></slot>
</div>

<Footer />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
</style>
