<script lang="ts">
  import {page} from "$app/stores"
  import AmbassadorContact from "$lib/ambassadors/AmbassadorContact.svelte"
  import AmbassadorContent from "$lib/ambassadors/AmbassadorContent.svelte"
  import AmbassadorFigure from "$lib/ambassadors/AmbassadorFigure.svelte"
  import AmbassadorMore from "$lib/ambassadors/AmbassadorMore.svelte"
  import AmbassadorPlace from "$lib/ambassadors/AmbassadorPlace.svelte"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import Head from "$lib/Head.svelte"
  import AmbassadorsLink from "$lib/links/pages/AmbassadorsLink.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"

  $: ref = `ambassadors/${$page.params.ambassadorId}`
</script>

<FirestoreDocument {ref} let:data={ambassador}>
  <Head title={ambassador.name} description={ambassador.content} />

  <AmbassadorFigure {ambassador} />
  <h1 class="top">
    <ThisLink>{ambassador.name}</ThisLink>
  </h1>
  {#if ambassador["participant-id"]}
    <FirestoreDocument
      ref="participants/{ambassador['participant-id']}"
      let:data={participant}>
      <h2>
        <ParticipantLink id={participant.id}>
          {participant.name}
        </ParticipantLink>
      </h2>
    </FirestoreDocument>
  {/if}
  <AmbassadorPlace {ambassador} level={2} />
  <AmbassadorContent {ambassador} />
  <AmbassadorMore {ambassador} />
  <AmbassadorContact {ambassador} />
  <AmbassadorsLink>See our other ambassadors</AmbassadorsLink>
  <!-- TODO: map? -->
</FirestoreDocument>
