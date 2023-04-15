<script lang="ts">
  import BookImage from "$lib/images/BookImage.svelte"
  import type Book from "$lib/types/Book"

  export let book: Book
</script>

{#if book.cover}
  <figure>
    <BookImage file={book.cover} />
  </figure>
{/if}
