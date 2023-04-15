<script lang="ts">
  import {page} from "$app/stores"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import type FromFirestore from "$lib/types/FromFirestore"
  import type VideoOfTheWeek from "$lib/types/VideoOfTheWeek"
  import VideoOfTheWeekContent from "$lib/videos-of-the-week/VideoOfTheWeekContent.svelte"
  import VideoOfTheWeekDate from "$lib/videos-of-the-week/VideoOfTheWeekDate.svelte"
  import VideoOfTheWeekShareLinks from "$lib/videos-of-the-week/VideoOfTheWeekShareLinks.svelte"
  import VideoOfTheWeekTitle from "$lib/videos-of-the-week/VideoOfTheWeekTitle.svelte"
  import {collection, orderBy, query, where} from "firebase/firestore"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(
    collection(firestore, "weekly-videos"),
    where("timestamp", "<=", new Date()),
    orderBy("timestamp", "desc"),
  )

  $: predicate = (video: FromFirestore<VideoOfTheWeek>) =>
    filteringText == null || stringIn(filteringText, video)

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
  title="Video of the Week"
  description="John's Campaign's video of the week." />

<h1 class="top">
  <ThisLink>Video of the Week</ThisLink>
</h1>
<Filter text={filteringText} on:filter={(event) => filter(event.detail.text)} />
<div class="videos">
  <FirestoreList {ref} {predicate} let:item={video} itemClass="video" lazy>
    <VideoOfTheWeekDate {video} level={2} />
    <VideoOfTheWeekTitle {video} level={3} />
    <VideoOfTheWeekContent {video} />
    <VideoOfTheWeekShareLinks {video} />
  </FirestoreList>
</div>

<style lang="sass">
  .videos :global(.video)
    margin-block-start: $l-gap
</style>
