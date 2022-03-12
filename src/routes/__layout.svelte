
<script type="ts">
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

<style global lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html.transition,
    html.transition *,
    html.transition *:before,
    html.transition *:after {
      transition: all 750ms;
      transition-delay: 0;
    }
</style>