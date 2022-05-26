<script context="module">
  export async function load({fetch, params}) {
    let post = {}
    if (params.slug !== 'logo.svg') {
      post = await fetch(`${params.slug}.json`)
      .then(r => {
        return r.json()
      })
    }
    return {
        props: { post }
    }
  }
</script>

<script>
  export let post;
</script>

<article class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
  <div class="container w-8/12 mx-auto my-10 py-10 mb-40">
    <h2 class="font-display font-bold text-3xl">{post.attributes.title}</h2>
    <span class="text-md font-normal">{new Date(post.attributes.date).toLocaleDateString()}</span>
    <img src="../{post.attributes.thumbnail}" alt={post.attributes.title} class="rounded-md shadow-xl mx-auto my-10 border-bg-white border-8"/>
    <div class="text-xl">
      {@html post.html.code}
    </div>
</article>

<style lang="postcss">
@media (min-width: 876px) and (max-width: 1023px) {
      .width-adjust {
          width: 100vw;
      }
  }
  
  .grad-1 {
      background: var(--fg-dark)
      linear-gradient(146deg, rgba(255,255,255,0.2) 0%, rgba(2,0,36,0.1) 100%);
      background-blend-mode: color-burn;
  }
  
  .dark.grad-1 {
      background: var(--action-dark)
      linear-gradient(146deg, rgba(2,0,36,0.15) 0%, rgba(2,0,36,0.35) 100%);
      background-blend-mode: color-burn;
  }
</style>