<script lang="ts">
  import type Book from "$lib/types/Book"
  import Heading from "$lib/Heading.svelte"
  import BookLink from "$lib/links/pages/BookLink.svelte"

  export let book: Book
  export let level: number
</script>

<Heading {level}>
  <BookLink id={book.id}>
    {@html book.title}{#if book.subtitle}: {@html book.subtitle}{/if}
  </BookLink>
</Heading>
