<script lang="ts">
  import {page} from "$app/stores"
  import BookAuthors from "$lib/books/BookAuthors.svelte"
  import BookContent from "$lib/books/BookContent.svelte"
  import BookFigure from "$lib/books/BookFigure.svelte"
  import BookInformationAndLinks from "$lib/books/BookInformationAndLinks.svelte"
  import BookTitle from "$lib/books/BookTitle.svelte"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import type Book from "$lib/types/Book"
  import type FromFirestore from "$lib/types/FromFirestore"
  import {collection, orderBy, query, where} from "firebase/firestore"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(
    collection(firestore, "books"),
    where("timestamp", "<=", new Date()),
    orderBy("timestamp", "desc"),
  )

  $: predicate = (book: FromFirestore<Book>) =>
    filteringText == null || stringIn(filteringText, book)

  const filter = (text: string) => {
    filteringText = text
    // const url = new URL($page.url)
    // if (filteringText) {
    //   url.searchParams.set("text", filteringText)
    // } else {
    //   url.searchParams.delete("text")
    // }
    // history.replaceState("", "", url)
  }
</script>

<Head title="Books" description="Publications from John's Campaign." />

<h1 class="top">
  <ThisLink>Books</ThisLink>
</h1>
<Filter text={filteringText} on:filter={(event) => filter(event.detail.text)} />
<FirestoreList {ref} {predicate} let:item={book} lazy initial={2} increment={2}>
  <BookFigure {book} />
  <BookTitle {book} level={2} />
  <BookAuthors {book} level={3} />
  <BookInformationAndLinks {book} />
  <BookContent {book} />
</FirestoreList>
