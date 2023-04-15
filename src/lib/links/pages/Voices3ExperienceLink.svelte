<script lang="ts">
  export let id: string

  $: href = `/voices/3/experience/${id}`
</script>

<a {href}><slot>{id}</slot></a>
