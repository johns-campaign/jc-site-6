<script lang="ts">
  export let title = ""
  export let description = ""

  $: strippedDescription = description
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()
</script>

<svelte:head>
  {#if title}
    <title>{title} | John's Campaign</title>
  {:else}
    <title>John's Campaign</title>
  {/if}
  {#if description}
    <meta name="description" content={strippedDescription} />
  {/if}
</svelte:head>
