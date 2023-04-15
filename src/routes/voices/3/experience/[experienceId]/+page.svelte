<script lang="ts">
  import {page} from "$app/stores"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import {formatAuthors} from "$lib/format"
  import Head from "$lib/Head.svelte"
  import Voices3ExperienceNames from "$lib/voices/3/experiences/Voices3ExperienceNames.svelte"

  $: ref = `voices/3/experiences-of-care/${$page.params.experienceId}`
</script>

<FirestoreDocument {ref} let:data={experience}>
  <Head
    title={formatAuthors(experience.names)}
    description={experience.information || ""} />

  <h1 class="top">
    <Voices3ExperienceNames {experience} />
  </h1>
  {#if experience.information}
    <p>
      <em>{@html experience.information}</em>
    </p>
  {/if}
  {#each experience.content as content}
    <p>{@html content}</p>
  {/each}
</FirestoreDocument>
