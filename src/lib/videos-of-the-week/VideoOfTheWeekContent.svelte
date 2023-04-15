<script lang="ts">
  import type VideoOfTheWeek from "$lib/types/VideoOfTheWeek"

  export let video: VideoOfTheWeek
</script>

{#each video.content as content}
  <p>
    {@html content}
  </p>
{/each}
