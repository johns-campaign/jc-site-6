<script lang="ts">
  import {firestore} from "$lib/firebase"
  import FirestoreCollection from "$lib/firebase/FirestoreCollection.svelte"
  import AmbassadorLink from "$lib/links/pages/AmbassadorLink.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import Map from "$lib/maps/Map.svelte"
  import Marker from "$lib/maps/Marker.svelte"
  import type Ambassador from "$lib/types/Ambassador"
  import type Participant from "$lib/types/Participant"
  import {collection, query, where} from "firebase/firestore"
  import AmbassadorContact from "./AmbassadorContact.svelte"
  import AmbassadorContent from "./AmbassadorContent.svelte"

  export let ambassadors: Ambassador[]

  const participantsRef = query(
    collection(firestore, "participants"),
    where("location", "!=", null),
  )

  $: participantsPredicate = (participant: Participant) =>
    ambassadors
      .map((ambassador) => ambassador["participant-id"])
      .includes(participant.id)

  let selectedParticipant: Participant | undefined

  const onClick = (participant: Participant) => {
    selectedParticipant =
      selectedParticipant?.id === participant.id ? undefined : participant
  }
</script>

<FirestoreCollection
  ref={participantsRef}
  predicate={participantsPredicate}
  let:data={participants}>
  <Map>
    {#each participants as participant (participant.id)}
      <Marker
        icon="/images/markers/male-2.png"
        latitude={participant.location.latitude}
        longitude={participant.location.longitude}
        on:click={() => onClick(participant)} />
    {/each}
  </Map>
  {#if selectedParticipant}
    <div class="selected-participant">
      <h2>
        Selected:
        <ParticipantLink id={selectedParticipant.id}>
          {selectedParticipant.name}
        </ParticipantLink>
      </h2>
      <ul>
        {#each ambassadors.filter((ambassador) => ambassador["participant-id"] == selectedParticipant?.id) as ambassador}
          <li>
            <p>
              <AmbassadorLink id={ambassador.id}>
                {ambassador.name}
              </AmbassadorLink>
            </p>
            <AmbassadorContent {ambassador} />
            <AmbassadorContact {ambassador} />
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</FirestoreCollection>

<style lang="sass">
.selected-participant
  h2
    font-size: 17pt
  h3
    font-size: 14.5pt
</style>
