<script lang="ts">
  import type Route from "$lib/types/Voices/3/Route"

  export let route: Route
</script>

<p>{@html route.description}</p>
