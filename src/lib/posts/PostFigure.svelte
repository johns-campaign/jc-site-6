<script lang="ts">
  import PostImage from "$lib/images/PostImage.svelte"
  import type Post from "$lib/types/Post"

  export let post: Post
</script>

{#if post.image?.file}
  <figure>
    <PostImage file={post.image.file} />
    {#if post.image.caption}
      <figcaption>
        {@html post.image.caption}
      </figcaption>
    {/if}
  </figure>
{/if}
