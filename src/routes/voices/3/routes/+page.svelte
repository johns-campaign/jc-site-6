<script lang="ts">
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import Voices3RouteLink from "$lib/links/pages/Voices3RouteLink.svelte"
  import Voices3RoutesLink from "$lib/links/pages/Voices3RoutesLink.svelte"
  import Voices3TestimonyContent from "$lib/voices/3/routes/testimonies/Voices3TestimonyContent.svelte"
  import Voices3TestimonyInformation from "$lib/voices/3/routes/testimonies/Voices3TestimonyInformation.svelte"
  import Voices3TestimonyNames from "$lib/voices/3/routes/testimonies/Voices3TestimonyNames.svelte"
  import Voices3RouteDescription from "$lib/voices/3/routes/Voices3RouteDescription.svelte"
  import Voices3RoutesIntroduction from "$lib/voices/3/routes/Voices3RoutesIntroduction.svelte"
  import Voices3RouteTestimonies from "$lib/voices/3/routes/Voices3RouteTestimonies.svelte"
</script>

<Head
  title="Voices III: Routes"
  description="How do people living with dementia become in-patients in mental health wards?" />

<h1 class="top">
  <Voices3RoutesLink />
</h1>
<Voices3RoutesIntroduction />
<FirestoreList ref="voices/3/routes" let:item={route}>
  <h2>
    <Voices3RouteLink id={route.id} />
  </h2>
  <Voices3RouteDescription {route} />
  <Voices3RouteTestimonies {route} />
  <FirestoreList
    ref="voices/3/routes/{route.id}/testimonies"
    let:item={testimony}>
    <h3>
      <Voices3TestimonyNames routeId={route.id} {testimony} />
    </h3>
    <Voices3TestimonyInformation {testimony} />
    <Voices3TestimonyContent {testimony} />
  </FirestoreList>
</FirestoreList>
