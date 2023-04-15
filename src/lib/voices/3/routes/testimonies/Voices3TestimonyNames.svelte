<script lang="ts">
  import {formatAuthors} from "$lib/format"
  import Voices3TestimonyLink from "$lib/links/pages/Voices3TestimonyLink.svelte"
  import type Testimony from "$lib/types/Voices/3/Route/Testimony"

  export let routeId: string
  export let testimony: Testimony
</script>

<Voices3TestimonyLink {routeId} testimonyId={testimony.id}>
  {formatAuthors(testimony.names)}
</Voices3TestimonyLink>
