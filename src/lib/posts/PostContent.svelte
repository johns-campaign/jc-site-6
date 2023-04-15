<script lang="ts">
  import type Post from "$lib/types/Post"

  export let post: Post
</script>

{#each post.content as content}
  <p>{@html content}</p>
{/each}
