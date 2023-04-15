<script lang="ts">
  import type Ambassador from "$lib/types/Ambassador"
  import Quote from "$lib/Quote.svelte"

  export let ambassador: Ambassador
</script>

{#if ambassador.more}
  {#if [true, undefined].includes(ambassador.more.quote)}
    <Quote paragraphs={ambassador.more.content} />
  {:else}
    {#each ambassador.more.content as paragraph}
      <p>{@html paragraph}</p>
    {/each}
  {/if}
{/if}
