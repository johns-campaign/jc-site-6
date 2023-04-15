<script lang="ts">
  import BlogLink from "$lib/links/pages/BlogLink.svelte"
  import type Post from "$lib/types/Post"

  export let post: Post

  $: tags = Object.keys(post.tags)
</script>

<div class="tags">
  Tags:
  {#each tags as tag, index}
    {#if index},{/if}
    <BlogLink tags={[tag]}>{tag}</BlogLink>
  {/each}
</div>

<style lang="sass">
.tags
  margin-block-end: $s-gap
  :global(a)
    font-family: $monospace
    font-size: 10pt
    background-size: 0% 1.5px
    &:hover
      background-size: 100% 1.5px !important
</style>
