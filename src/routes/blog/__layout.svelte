
<script type="ts">
  import Meta from '$lib/Meta.svelte';
  import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
  import { navigating } from '$app/stores';
  import '../../css/app.css';
</script>

<Meta />

{#if $navigating}
	<PreloadingIndicator />
{/if}

<div class="custom-container">
  <slot></slot>
</div>

<style global lang="postcss">

</style>