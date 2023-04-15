<script lang="ts">
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import type Route from "$lib/types/Voices/3/Route"
  import Voices3TestimonyNames from "./testimonies/Voices3TestimonyNames.svelte"

  export let route: Route
</script>

<FirestoreList
  styled
  ordered
  ref="voices/3/routes/{route.id}/testimonies"
  let:item={testimony}>
  <Voices3TestimonyNames routeId={route.id} {testimony} />
  {#if testimony.information}
    <em>{@html testimony.information}</em>
  {/if}
</FirestoreList>
