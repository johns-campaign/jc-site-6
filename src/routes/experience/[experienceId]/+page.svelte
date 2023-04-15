<script lang="ts">
  import {page} from "$app/stores"
  import ExperienceContent from "$lib/experiences/ExperienceContent.svelte"
  import ExperienceDate from "$lib/experiences/ExperienceDate.svelte"
  import ExperienceFigure from "$lib/experiences/ExperienceFigure.svelte"
  import ExperienceName from "$lib/experiences/ExperienceName.svelte"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import {formatTimestampAsDate} from "$lib/format"
  import Head from "$lib/Head.svelte"
  import ExperiencesLink from "$lib/links/pages/ExperiencesLink.svelte"

  $: ref = `experiences/${$page.params.experienceId}`
</script>

<FirestoreDocument {ref} let:data={experience}>
  <Head
    title={experience.name}
    description={formatTimestampAsDate(experience.timestamp)} />

  <ExperienceFigure {experience} />
  <div class="experience-name">
    <ExperienceName {experience} level={1} />
  </div>
  <ExperienceDate {experience} level={2} />
  <ExperienceContent {experience} />
  <ExperiencesLink>Read other experiences</ExperiencesLink>
</FirestoreDocument>

<style lang="sass">
  .experience-name :global(.heading)
    margin-block-start: 0
</style>
