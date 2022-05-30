<script>
    export let post;
  </script>

<div class="container w-8/12 mx-auto my-10 py-10 mb-40">
    <h2 class="font-display font-bold text-3xl">{post.attributes.title}</h2>
    <span class="text-md font-normal">{new Date(post.attributes.date).toLocaleDateString()}</span>
    <img src="../{post.attributes.thumbnail}" alt={post.attributes.title} class="rounded-md shadow-xl mx-auto my-10 border-bg-white border-8"/>
    <div class="text-xl">
        {@html post.html}
    </div>
</div>
