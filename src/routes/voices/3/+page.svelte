<script lang="ts">
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import Voices3ExperiencesLink from "$lib/links/pages/Voices3ExperiencesLink.svelte"
  import Voices3RouteLink from "$lib/links/pages/Voices3RouteLink.svelte"
  import Voices3RoutesLink from "$lib/links/pages/Voices3RoutesLink.svelte"
  import Voices3ExperienceNames from "$lib/voices/3/experiences/Voices3ExperienceNames.svelte"
  import Voices3ExperiencesIntroduction from "$lib/voices/3/experiences/Voices3ExperiencesIntroduction.svelte"
  import Voices3RouteDescription from "$lib/voices/3/routes/Voices3RouteDescription.svelte"
  import Voices3RoutesIntroduction from "$lib/voices/3/routes/Voices3RoutesIntroduction.svelte"
  import Voices3RouteTestimonies from "$lib/voices/3/routes/Voices3RouteTestimonies.svelte"
</script>

<Head
  title="Voices III"
  description="How do people living with dementia become in-patients in mental health wards? What are their Experiences of Care in the Mental Health Unit?" />

<h1 class="top">
  <ThisLink>Voices III</ThisLink>
</h1>
<h2>
  <Voices3RoutesLink />
</h2>
<Voices3RoutesIntroduction />
<FirestoreList ref="voices/3/routes" let:item={route}>
  <h2>
    <Voices3RouteLink id={route.id} />
  </h2>
  <Voices3RouteDescription {route} />
  <Voices3RouteTestimonies {route} />
</FirestoreList>
<h2>
  <Voices3ExperiencesLink />
</h2>
<Voices3ExperiencesIntroduction />
<FirestoreList
  styled
  ordered
  ref="voices/3/experiences-of-care"
  let:item={experience}>
  <Voices3ExperienceNames {experience} />
  {#if experience.information}
    <em>{@html experience.information}</em>
  {/if}
</FirestoreList>
