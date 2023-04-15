<script lang="ts">
  import {page} from "$app/stores"
  import BookAuthors from "$lib/books/BookAuthors.svelte"
  import BookContent from "$lib/books/BookContent.svelte"
  import BookFigure from "$lib/books/BookFigure.svelte"
  import BookInformationAndLinks from "$lib/books/BookInformationAndLinks.svelte"
  import BookTitle from "$lib/books/BookTitle.svelte"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import Head from "$lib/Head.svelte"
  import BooksLink from "$lib/links/pages/BooksLink.svelte"

  $: ref = `books/${$page.params.bookId}`
</script>

<FirestoreDocument {ref} let:data={book}>
  <!-- TODO: descriptions -->
  <Head title={book.title} />

  <BookFigure {book} />
  <div class="title">
    <BookTitle {book} level={2} />
  </div>
  <BookAuthors {book} level={3} />
  <BookInformationAndLinks {book} />
  <BookContent {book} />
  <BooksLink>See our other books</BooksLink>
</FirestoreDocument>

<style lang="sass">
  .title :global(.heading)
    margin-block-start: 0
</style>
