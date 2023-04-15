<script lang="ts">
  export let id: string

  $: href = `/voices/3/route/${id}`
</script>

<a {href}><slot>Route {id}</slot></a>
