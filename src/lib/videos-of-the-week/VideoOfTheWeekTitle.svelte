<script lang="ts">
  import Heading from "$lib/Heading.svelte"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import type VideoOfTheWeek from "$lib/types/VideoOfTheWeek"

  export let video: VideoOfTheWeek
  export let level: number
</script>

<Heading {level}>
  <ExternalLink href={video.href}>
    {video.title}
  </ExternalLink>
</Heading>
