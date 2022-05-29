<script context="module">
  export async function load({ params, fetch }) {
    console.log(params)
    //if (params.slug !== 'logo.svg') {
    const post = await fetch(`${params.slug}.json`).then((res) => res.json());
    //}

    console.log('BRRRRRR: ', post)
    
    return {
        props: { post }
    };
  }
</script>

<script>
  import Post from '$lib/Post.svelte';
  export let post;
</script>

<article class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
  <svelte:component this={Post} {post}/>
</article>

<style lang="postcss">
@media (min-width: 876px) and (max-width: 1023px) {
      .width-adjust {
          width: 100vw;
      }
  }
</style>