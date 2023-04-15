<script lang="ts">
  import {page} from "$app/stores"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import {formatAuthors} from "$lib/format"
  import Head from "$lib/Head.svelte"
  import Voices3TestimonyContent from "$lib/voices/3/routes/testimonies/Voices3TestimonyContent.svelte"
  import Voices3TestimonyInformation from "$lib/voices/3/routes/testimonies/Voices3TestimonyInformation.svelte"
  import Voices3TestimonyNames from "$lib/voices/3/routes/testimonies/Voices3TestimonyNames.svelte"

  $: routeId = $page.params.routeId

  $: ref = `voices/3/routes/${routeId}/testimonies/${$page.params.testimonyId}`
</script>

<FirestoreDocument {ref} let:data={testimony}>
  <Head
    title={formatAuthors(testimony.names)}
    description={testimony.information || ""} />

  <h1 class="top">
    <Voices3TestimonyNames {routeId} {testimony} />
  </h1>
  <Voices3TestimonyInformation {testimony} />
  <Voices3TestimonyContent {testimony} />
</FirestoreDocument>
