<script lang="ts">
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import {firestore} from "$lib/firebase"
  import {formatAuthors, formatTimestampAsDate} from "$lib/format"
  import {collection, orderBy, query, where} from "firebase/firestore"
  import Quote from "$lib/Quote.svelte"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {page} from "$app/stores"
  import ArticleImage from "$lib/images/ArticleImage.svelte"
  import type Article from "$lib/types/Article"
  import {stringIn} from "$lib/filter"
  import type FromFirestore from "$lib/types/FromFirestore"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import Filter from "$lib/filters/Filter.svelte"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(
    collection(firestore, "articles"),
    where("timestamp", "<=", new Date()),
    orderBy("timestamp", "desc"),
  )

  $: predicate = (article: FromFirestore<Article>) =>
    filteringText == null || stringIn(filteringText, article)

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

<Head
  title="Articles"
  description="Articles about (or relevant to) John's Campaign." />

<h1 class="top">
  <ThisLink>Articles</ThisLink>
</h1>
<Filter text={filteringText} on:filter={(event) => filter(event.detail.text)} />
<FirestoreList {ref} {predicate} let:item={article} lazy>
  {#if article.image?.file}
    <figure>
      <ArticleImage file={article.image.file} />
      {#if article.image.credit}
        <figcaption>
          Picture from {article.image.credit}
        </figcaption>
      {/if}
    </figure>
  {/if}
  <h3>{article.title}</h3>
  <h4>
    {article.site}
    {#if article.authors}
      ({formatAuthors(article.authors)})
    {/if}
  </h4>
  {#if article.quote}
    <Quote paragraphs={[article.quote]} />
  {/if}
  {#if article.standfirst}
    <p>{@html article.standfirst}</p>
  {/if}
  <ExternalLink href={article.href}
    >Read article ({formatTimestampAsDate(article.timestamp)})</ExternalLink>
</FirestoreList>
