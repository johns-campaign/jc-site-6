<script lang="ts">
  import {page} from "$app/stores"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreCollection from "$lib/firebase/FirestoreCollection.svelte"
  import Head from "$lib/Head.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import SignUpsMap from "$lib/maps/SignUpsMap.svelte"
  import Quote from "$lib/Quote.svelte"
  import type FromFirestore from "$lib/types/FromFirestore"
  import type Participant from "$lib/types/Participant"
  import type SignUp from "$lib/types/Participant/SignUp"
  import {collection, query, where} from "firebase/firestore"

  let showSignUps = false

  const ref = query(
    collection(firestore, "participants"),
    where("sign-ups", "!=", []),
  )

  const compare = (
    participant1: Participant,
    participant2: Participant,
  ): number => participant1.name.localeCompare(participant2.name)

  const allSignUps = (participants: Participant[]): SignUp[] =>
    participants.flatMap((participant) =>
      (participant["sign-ups"] || []).map((signUp) => ({
        participant,
        ...signUp,
      })),
    )

  let selectedSignUp: (SignUp & {participant: Participant}) | undefined

  const selectSignUp = (
    event: CustomEvent<SignUp | (SignUp & {participant: Participant})>,
  ) => {
    const signUp = event.detail as SignUp & {participant: Participant}
    selectedSignUp =
      selectedSignUp?.participant.id == signUp.participant.id &&
      selectedSignUp?.name == signUp.name
        ? undefined
        : signUp
  }

  let filteringText: string = $page.url.searchParams.get("text") || ""

  $: predicate = (book: FromFirestore<Participant>) =>
    filteringText == null || stringIn(filteringText, book)

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

<Head
  title="Participants"
  description="Organisations participating in John's Campaign." />

<h1 class="top">
  <ThisLink>Participants</ThisLink>
</h1>
<Filter text={filteringText} on:filter={(event) => filter(event.detail.text)} />
<FirestoreCollection {ref} {predicate} {compare} let:data={participants}>
  <SignUpsMap signUps={allSignUps(participants)} on:click={selectSignUp} />
  {#if selectedSignUp}
    <div class="selected-sign-up">
      <h2>
        Selected:
        {selectedSignUp.name}
      </h2>
      <h3>
        From:
        <ParticipantLink id={selectedSignUp.participant.id}>
          {selectedSignUp.participant.name}
        </ParticipantLink>
      </h3>
      <Quote
        paragraphs={[
          selectedSignUp.pledge || selectedSignUp.participant.pledge || "",
        ]} />
    </div>
  {/if}
  <label class="show-sign-ups">
    <input
      type="checkbox"
      on:change={() => (showSignUps = !showSignUps)}
      value={showSignUps} />
    Show sign-ups
  </label>
  <ul>
    {#each participants as participant (participant.id)}
      <li>
        <ParticipantLink id={participant.id}>
          {participant.name}
        </ParticipantLink>
        {#if showSignUps}
          <ul>
            {#each participant["sign-ups"] as signUp}
              <li class="sign-up">
                {signUp.name}
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</FirestoreCollection>

<style lang="sass">
  ul li.sign-up
    margin: 0

  .selected-sign-up
    margin-block-end: $m-gap
    h2
      font-size: 17pt
    h3
      font-size: 14.5pt

  .show-sign-ups
    display: block
    margin-block-start: $l-gap
</style>
