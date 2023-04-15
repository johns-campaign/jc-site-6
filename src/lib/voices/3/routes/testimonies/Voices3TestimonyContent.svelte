<script lang="ts">
  import type Testimony from "$lib/types/Voices/3/Route/Testimony"

  export let testimony: Testimony
</script>

{#each testimony.content as content}
  <p>{@html content}</p>
{/each}
