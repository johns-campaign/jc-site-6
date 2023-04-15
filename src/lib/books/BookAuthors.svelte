<script lang="ts">
  import type Book from "$lib/types/Book"
  import Heading from "$lib/Heading.svelte"

  export let book: Book
  export let level: number
</script>

{#if book.authors}
  {#each book.authors as author}
    <Heading {level}>
      {@html author}
    </Heading>
  {/each}
{/if}
