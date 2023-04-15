<script lang="ts">
  export let id: string

  $: href = `/experience/${id}`
</script>

<a {href}><slot>{id}</slot></a>
