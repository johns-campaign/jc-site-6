<script lang="ts">
  import type Post from "$lib/types/Post"

  export let post: Post
</script>

{#if post.standfirst}
  <p>
    <em>
      {@html post.standfirst}
    </em>
  </p>
{/if}
