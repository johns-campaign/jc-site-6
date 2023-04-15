<script lang="ts">
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import Voices3ExperiencesLink from "$lib/links/pages/Voices3ExperiencesLink.svelte"
  import Voices3ExperienceNames from "$lib/voices/3/experiences/Voices3ExperienceNames.svelte"
  import Voices3ExperiencesIntroduction from "$lib/voices/3/experiences/Voices3ExperiencesIntroduction.svelte"

  const ref = "voices/3/experiences-of-care"
</script>

<Head
  title="Voices III: Experiences"
  description="What are peoples' Experiences of Care in the Mental Health Unit?" />

<h1 class="top">
  <Voices3ExperiencesLink />
</h1>
<Voices3ExperiencesIntroduction />
<FirestoreList styled ordered {ref} let:item={experience}>
  <Voices3ExperienceNames {experience} />
  {#if experience.information}
    <em>{@html experience.information}</em>
  {/if}
</FirestoreList>
<FirestoreList {ref} let:item={experience}>
  <h2>
    <Voices3ExperienceNames {experience} />
  </h2>
  {#if experience.information}
    <p>
      <em>{@html experience.information}</em>
    </p>
  {/if}
  {#each experience.content as content}
    <p>{@html content}</p>
  {/each}
</FirestoreList>
