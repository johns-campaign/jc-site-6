<script lang="ts">
  import {page} from "$app/stores"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import {formatTimestampAsDate} from "$lib/format"
  import Head from "$lib/Head.svelte"
  import VideosOfTheWeekLink from "$lib/links/pages/VideosOfTheWeekLink.svelte"
  import VideoOfTheWeekContent from "$lib/videos-of-the-week/VideoOfTheWeekContent.svelte"
  import VideoOfTheWeekDate from "$lib/videos-of-the-week/VideoOfTheWeekDate.svelte"
  import VideoOfTheWeekShareLinks from "$lib/videos-of-the-week/VideoOfTheWeekShareLinks.svelte"
  import VideoOfTheWeekTitle from "$lib/videos-of-the-week/VideoOfTheWeekTitle.svelte"

  $: ref = `weekly-videos/${$page.params.videoId}`
</script>

<FirestoreDocument {ref} let:data={video}>
  <Head
    title={video.title}
    description="John's Campaign's video of the {video.day
      ? 'day,'
      : 'week starting'} {formatTimestampAsDate(video.timestamp)}" />

  <div class="video-date">
    <VideoOfTheWeekDate {video} level={1} />
  </div>
  <VideoOfTheWeekTitle {video} level={2} />
  <VideoOfTheWeekContent {video} />
  <VideoOfTheWeekShareLinks {video} />
  <p>
    <VideosOfTheWeekLink>See our other videos</VideosOfTheWeekLink>
  </p>
</FirestoreDocument>

<style lang="sass">
  .video-date :global(.heading)
    margin-block-start: 0
</style>
