<script lang="ts">
  import type Post from "$lib/types/Post"
  import Heading from "$lib/Heading.svelte"
  import {formatAuthors, formatTimestampAsDate} from "$lib/format"

  export let post: Post
  export let level: number
</script>

<div class="authors-and-date">
  <Heading {level}>
    {formatAuthors(post.authors)}
    |
    {formatTimestampAsDate(post.timestamp)}
  </Heading>
</div>

<style lang="sass">
  .authors-and-date :global(.heading)
    margin-top: $xs-gap
</style>
