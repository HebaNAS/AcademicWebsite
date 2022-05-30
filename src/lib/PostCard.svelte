<script>
    export let title;
    export let date;
    export let excerpt;
    export let thumbnail;

    export let url;
</script>

<a href={url} class="transform hover:scale-110">
  <article class="shadow-lg rounded-sm h-[30rem] bg-theme-fg-light dark:bg-theme-action p-4 flex flex-col items-stretch justify-stretch">
    <a sveltekit:prefetch href={url} class="w-full self-center">
        <img src={thumbnail} alt="New blog post" class="border-bg-white border-8 rounded-md shadow-md" />
    </a>
    <div class="flex flex-col self-start p-2">
        <a sveltekit:prefetch href={url} class="hover:underline mt-4">
            <h3 class="text-xl font-bold">{title}</h3>
        </a>
        <span class="text-xs font-normal">{new Date(date).toLocaleDateString()}</span>
        <hr class="w-1/3 border-t-theme-action dark:border-t-theme-fg-light border-t-1 my-1" />
        <p class="text-theme-text-dark dark:text-white text-md mt-4">{excerpt}</p>
        <a sveltekit:prefetch href="{url}" class="underline mt-4 hover:text-theme-action dark:hover:text-theme-fg-dark">
            Read more...
        </a>
    </div>
  </article>
</a>
