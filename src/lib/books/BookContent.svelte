<script lang="ts">
  import type Book from "$lib/types/Book"

  export let book: Book
</script>

{#each book.content as content}
  <p>{@html content}</p>
{/each}
