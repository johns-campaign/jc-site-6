<script lang="ts">
  import type Experience from "$lib/types/Experience"

  export let experience: Experience
</script>

{#each experience.content as content}
  <p>{@html content}</p>
{/each}
