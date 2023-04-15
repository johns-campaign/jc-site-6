<script lang="ts">
  import {page} from "$app/stores"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import Voices3TestimonyContent from "$lib/voices/3/routes/testimonies/Voices3TestimonyContent.svelte"
  import Voices3TestimonyInformation from "$lib/voices/3/routes/testimonies/Voices3TestimonyInformation.svelte"
  import Voices3TestimonyNames from "$lib/voices/3/routes/testimonies/Voices3TestimonyNames.svelte"
  import Voices3RouteDescription from "$lib/voices/3/routes/Voices3RouteDescription.svelte"
  import Voices3RouteTestimonies from "$lib/voices/3/routes/Voices3RouteTestimonies.svelte"

  $: ref = `voices/3/routes/${$page.params.routeId}`
</script>

<FirestoreDocument {ref} let:data={route}>
  <Head title="Voices III: Route {route.id}" description={route.description} />

  <h1 class="top">
    <ThisLink>Route {route.id}</ThisLink>
  </h1>
  <Voices3RouteDescription {route} />
  <Voices3RouteTestimonies {route} />
  <FirestoreList
    ref="voices/3/routes/{route.id}/testimonies"
    let:item={testimony}>
    <h2>
      <Voices3TestimonyNames routeId={route.id} {testimony} />
    </h2>
    <Voices3TestimonyInformation {testimony} />
    <Voices3TestimonyContent {testimony} />
  </FirestoreList>
</FirestoreDocument>
