<script lang="ts">
  import type Experience from "$lib/types/Experience"
  import Heading from "$lib/Heading.svelte"
  import {formatTimestampAsDate} from "$lib/format"

  export let experience: Experience
  export let level: number
</script>

<Heading {level}>
  {formatTimestampAsDate(experience.timestamp)}
</Heading>
