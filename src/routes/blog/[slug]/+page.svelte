<script>
  import { base } from '$app/paths';
  import Post from '$lib/Post.svelte';
  export let data;
</script>

<article class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
  <a href="{base}/posts" class="ml-20 underline text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal">Back to Blog</a>
  
  <Post post={data.post} />
</article>

<style>
@media (min-width: 876px) and (max-width: 1023px) {
    .width-adjust {
        width: 100vw;
    }
}
</style>
