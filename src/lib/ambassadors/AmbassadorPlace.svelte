<script lang="ts">
  import Heading from "$lib/Heading.svelte"
  import type Ambassador from "$lib/types/Ambassador"

  export let ambassador: Ambassador
  export let level: number
</script>

{#if ambassador.place}
  <Heading {level}>
    {ambassador.place}
  </Heading>
{/if}
