<script lang="ts">
  import type Testimony from "$lib/types/Voices/3/Route/Testimony"

  export let testimony: Testimony
</script>

{#if testimony.information}
  <p>
    <em>{@html testimony.information}</em>
  </p>
{/if}
