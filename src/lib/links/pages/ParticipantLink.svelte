<script lang="ts">
  export let id: string

  $: href = `/participant/${id}`
</script>

<a {href}><slot>{id}</slot></a>
