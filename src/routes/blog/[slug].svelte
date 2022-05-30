<script context="module">
  export async function load({ params, fetch }) {
    const post = await fetch(`${params.slug}.json`).then((res) => res.json());
    
    return {
        props: { post }
    };
  }
</script>

<script>
  import Post from '$lib/Post.svelte';
  export let post;
  // export const prerender = true;
</script>

<article class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
  <a sveltekit:prefetch rel="external" href="https:www.macs.hw.ac.uk/~he12/myposts" class="ml-20 underline text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal">Back to Blog</a>
  
  <svelte:component this={Post} {post}/>
</article>

<style lang="postcss">
@media (min-width: 876px) and (max-width: 1023px) {
      .width-adjust {
          width: 100vw;
      }
  }
</style>
