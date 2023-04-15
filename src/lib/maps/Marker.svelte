<script lang="ts">
  import {createEventDispatcher, getContext, onDestroy, onMount} from "svelte"
  import contextKey from "./contextKey"
  import {markerLibrary} from "./google"

  export let latitude: number
  export let longitude: number
  export let icon: string | google.maps.Icon | google.maps.Symbol | undefined =
    undefined

  const {getMap} = getContext<{getMap: () => google.maps.Map}>(contextKey)
  const map = getMap()

  const dispatch = createEventDispatcher()

  let marker: google.maps.Marker | undefined

  onMount(async () => {
    const {Marker} = await markerLibrary()
    marker = new Marker({
      map,
      icon,
      position: {
        lat: latitude,
        lng: longitude,
      },
    })
    marker.addListener("click", () => dispatch("click"))
  })
  onDestroy(() => {
    marker?.setMap(null)
    marker = undefined
  })
</script>
