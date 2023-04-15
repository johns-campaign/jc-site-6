<script lang="ts">
  export let routeId: string
  export let testimonyId: string

  $: href = `/voices/3/route/${routeId}/${testimonyId}`
</script>

<a {href}><slot>Route {routeId}: {testimonyId}</slot></a>
