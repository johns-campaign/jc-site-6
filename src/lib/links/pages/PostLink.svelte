<script lang="ts">
  export let id: string

  $: href = `/post/${id}`
</script>

<a {href}><slot>{id}</slot></a>
