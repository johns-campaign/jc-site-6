<script lang="ts">
  import {formatDate, formatTimestampAsDate} from "$lib/format"
  import Heading from "$lib/Heading.svelte"
  import VideoOfTheWeekLink from "$lib/links/pages/VideoOfTheWeekLink.svelte"
  import type VideoOfTheWeek from "$lib/types/VideoOfTheWeek"

  export let video: VideoOfTheWeek
  export let level: number

  const sunday = (monday: Date) => {
    const date = new Date(monday.valueOf())
    date.setDate(date.getDate() + 6)
    return date
  }
</script>

<Heading {level}>
  <VideoOfTheWeekLink id={video.id}>
    {formatTimestampAsDate(video.timestamp)}
    {#if !video.day}
      -
      {formatDate(sunday(video.timestamp.toDate()))}
    {/if}
  </VideoOfTheWeekLink>
</Heading>
