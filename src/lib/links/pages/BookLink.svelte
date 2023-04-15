<script lang="ts">
  export let id: string

  $: href = `/book/${id}`
</script>

<a {href}><slot>{id}</slot></a>
