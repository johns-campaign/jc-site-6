<script lang="ts">
  import type Ambassador from "$lib/types/Ambassador"

  export let ambassador: Ambassador
</script>

{#if ambassador.content}
  <p>{@html ambassador.content}</p>
{/if}
