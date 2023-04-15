<script lang="ts">
  import AmbassadorImage from "$lib/images/AmbassadorImage.svelte"
  import type Ambassador from "$lib/types/Ambassador"

  export let ambassador: Ambassador
</script>

{#if ambassador.image?.file}
  <figure>
    <AmbassadorImage file={ambassador.image.file} />
    {#if ambassador.image.caption}
      <figcaption>
        {@html ambassador.image.caption}
      </figcaption>
    {/if}
  </figure>
{/if}
