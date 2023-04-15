<script lang="ts">
  import {page} from "$app/stores"
  import AmbassadorContact from "$lib/ambassadors/AmbassadorContact.svelte"
  import AmbassadorContent from "$lib/ambassadors/AmbassadorContent.svelte"
  import AmbassadorFigure from "$lib/ambassadors/AmbassadorFigure.svelte"
  import AmbassadorMore from "$lib/ambassadors/AmbassadorMore.svelte"
  import AmbassadorPlace from "$lib/ambassadors/AmbassadorPlace.svelte"
  import AmbassadorsMap from "$lib/ambassadors/AmbassadorsMap.svelte"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreCollection from "$lib/firebase/FirestoreCollection.svelte"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import Head from "$lib/Head.svelte"
  import AmbassadorLink from "$lib/links/pages/AmbassadorLink.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import List from "$lib/List.svelte"
  import type Ambassador from "$lib/types/Ambassador"
  import type FromFirestore from "$lib/types/FromFirestore"
  import {collection, orderBy, query} from "firebase/firestore"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(collection(firestore, "ambassadors"), orderBy("name"))

  $: predicate = (ambassador: FromFirestore<Ambassador>) =>
    !filteringText || stringIn(filteringText, ambassador)

  const filter = (text: string) => {
    filteringText = text
    // const url = new URL($page.url)
    // if (filteringText) {
    //   url.searchParams.set("text", filteringText)
    // } else {
    //   url.searchParams.delete("text")
    // }
    // history.replaceState("", "", url)
  }
</script>

<Head title="Ambassadors" description="The John's Campaign Ambassadors." />

<div class="ambassadors">
  <h1 class="top">
    <ThisLink>Ambassadors</ThisLink>
  </h1>
  <p>
    One of the inspiring features of this campaign has been the readiness of
    individual nurses, nursing directors, psychologists, patients experience
    managers and others to implement the principles of welcome in their own
    hospitals and then share their experience with others. Gillian McAuley was
    the first to suggest the title of Ambassador for people who believe that
    John's Campaign has enhanced the life of their hospital and who want to
    encourage others to do the same. There are many others without whom the
    campaign would never have moved beyond the stage of being a lovely idea.
    Some of them are listed below. This is not a closed shop: if you would like
    to be a John's Campaign Ambassador, please do get in touch.
  </p>
  <Filter
    text={filteringText}
    on:filter={(event) => filter(event.detail.text)} />
  <FirestoreCollection {ref} {predicate} let:data={ambassadors}>
    <AmbassadorsMap {ambassadors} />
    <List
      unstyled
      items={ambassadors}
      lazy
      initial={3}
      increment={2}
      itemClass="ambassador clear-after"
      key={(ambassador) => ambassador.id}
      let:item={ambassador}>
      <AmbassadorFigure {ambassador} />
      <h2 class="top">
        <AmbassadorLink id={ambassador.id}>
          {ambassador.name}
        </AmbassadorLink>
      </h2>
      {#if ambassador["participant-id"]}
        <FirestoreDocument
          ref="participants/{ambassador['participant-id']}"
          let:data={participant}>
          <h3>
            <ParticipantLink id={participant.id}>
              {participant.name}
            </ParticipantLink>
          </h3>
        </FirestoreDocument>
      {/if}
      <AmbassadorPlace {ambassador} level={3} />
      <AmbassadorContent {ambassador} />
      <!-- TODO: toggle more -->
      <AmbassadorMore {ambassador} />
      <AmbassadorContact {ambassador} />
    </List>
  </FirestoreCollection>
</div>

<style lang="sass">
  .ambassadors
    :global(.map)
      margin-block-end: $l-gap
    :global(.ambassador)
      padding-block-start: $m-gap
</style>
