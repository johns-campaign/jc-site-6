<script lang="ts">
  import {onMount, setContext} from "svelte"
  import contextKey from "./contextKey"
  import {mapsLibrary} from "./google"

  let element: HTMLElement
  let map: google.maps.Map

  setContext(contextKey, {
    getMap: () => map,
  })

  export let latitude = 55.6350345185
  export let longitude = -3.9605140962
  export let zoom = 5

  onMount(async () => {
    const {Map} = await mapsLibrary()
    map = new Map(element, {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom,
      mapTypeId: "hybrid",
      disableDefaultUI: true,
      fullscreenControl: true,
      scaleControl: true,
      zoomControl: true,
    })
  })
</script>

<div class="map" bind:this={element}>
  {#if map}
    <slot />
  {/if}
</div>

<style lang="sass">
  .map
    height: 500px
    margin-block: $m-gap
</style>
