<script lang="ts">
  import TwitterShareLink from "$lib/links/socials/TwitterShareLink.svelte"
  import type VideoOfTheWeek from "$lib/types/VideoOfTheWeek"

  export let video: VideoOfTheWeek
</script>

<p>
  <TwitterShareLink
    thing="video"
    page="video-of-the-week/{video.id}"
    title={video.title} />
</p>
