<script context="module">
    // export const prerender = false;
    // load data
    export async function load({ fetch }) {
      // request data from endpoint
      const posts = await fetch('./myposts.json').then((r) => {
        return r.json()
      })

      // assign it to the variable
      return {
          props: { posts }
      }
    }
  </script>
  
  <script>
    import PostCard from '$lib/PostCard.svelte';
    export let posts;
  </script>
  
  <section class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
      <div class="container w-8/12 mx-auto my-10 py-10 mb-40">
          <h2 class="font-display font-bold text-3xl">Blog</h2>
          <p class="my-10 text-lg text-theme-text-dark dark:text-white">Here is where I share what I'm learning and papers I read and found interesting. The contents of this blog are not related to my teaching and Heriot-Watt University is not responsible of the articles posted in this section.</p>
          <div class="shadow-xl w-full h-68 rounded-md bg-theme-fg-light dark:bg-theme-action p-10 flex lg:flex-row flex-col relative items-stretch justify-stretch">
            <span class="bg-theme-action dark:bg-theme-fg-light drop-shadow-lg text-white dark:text-theme-text-dark py-2 px-4 rounded-full absolute top-4 right-4">New</span>
            <a href={posts[0].url} class="lg:w-7/12 w-full h-full self-start">
                <img src={posts[0].thumbnail} alt="New blog post" class="border-bg-white border-8 rounded-md shadow-lg" />
            </a>
            <div class="flex flex-col self-start p-8">
                <a href={posts[0].url} class="hover:underline">
                    <h2 class="text-3xl font-bold">{posts[0].title}</h2>
                </a>
                <span class="text-sm font-normal">{new Date(posts[0].date).toLocaleDateString()}</span>
                <hr class="w-1/3 border-t-theme-action dark:border-t-theme-fg-light border-t-2 my-2" />
                <p class="text-theme-text-dark dark:text-white text-lg mt-8">{posts[0].excerpt}</p>
                <a href="{posts[0].url}" class="underline mt-8 hover:text-theme-action dark:hover:text-theme-fg-dark">
                    Read more...
                </a>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-8 h-max mt-20">
            {#if posts}
                {#each posts as post, i}
                    {#if i !== 0}
                        <PostCard {...post} />
                    {/if}
                {/each}
            {:else}
                <p>No blog posts at the moment...</p>
            {/if}
          </div>
      </div>
  </section>
  
  <style lang="postcss">
  @media (min-width: 876px) and (max-width: 1023px) {
      .width-adjust {
          width: 100vw;
      }
  }
  </style>
