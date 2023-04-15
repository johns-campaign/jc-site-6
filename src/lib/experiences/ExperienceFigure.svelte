<script lang="ts">
  import ExperienceImage from "$lib/images/ExperienceImage.svelte"
  import type Experience from "$lib/types/Experience"

  export let experience: Experience
</script>

{#if experience.image?.file}
  <figure>
    <ExperienceImage file={experience.image.file} />
    {#if experience.image.caption}
      <figcaption>
        {@html experience.image.caption}
      </figcaption>
    {/if}
  </figure>
{/if}
