<script lang="ts">
  import TwitterShareLink from "$lib/links/socials/TwitterShareLink.svelte"
  import type Post from "$lib/types/Post"

  export let post: Post
</script>

<p>
  <TwitterShareLink thing="post" page="post/{post.id}" title={post.title} />
</p>
