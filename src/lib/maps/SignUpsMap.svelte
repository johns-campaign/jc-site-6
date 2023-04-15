<script lang="ts">
  import type Participant from "$lib/types/Participant"
  import type SignUp from "$lib/types/Participant/SignUp"
  import type Sort from "$lib/types/Participant/SignUp/Sort"
  import {createEventDispatcher} from "svelte"
  import Map from "./Map.svelte"
  import Marker from "./Marker.svelte"

  export let signUps: (SignUp | (SignUp & {participant: Participant}))[]

  const iconFor_ = (sort: Sort): string => {
    switch (sort) {
      case "ambulance":
        return "ambulance.png"
      case "CCG":
        return "group-2.png"
      case "domiciliary":
        return "home-2.png"
      case "GP":
        return "medicine.png" // firstaid.png // waiting.png
      case "home":
        return "retirement_home.png"
      case "hospice":
        return "nursing_home_icon.png"
      case "hospital":
        return "hospital-building.png"
    }
  }

  const iconFor = (sort: Sort): string => `/images/markers/${iconFor_(sort)}`

  const dispatch = createEventDispatcher<{
    click: SignUp | (SignUp & {participant: Participant})
  }>()
</script>

<Map>
  {#each signUps as signUp}
    {#if signUp.location}
      <Marker
        icon={iconFor(signUp.sort)}
        latitude={signUp.location.latitude}
        longitude={signUp.location.longitude}
        on:click={() => dispatch("click", signUp)} />
    {/if}
  {/each}
</Map>
