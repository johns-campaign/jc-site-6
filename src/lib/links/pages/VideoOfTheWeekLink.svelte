<script lang="ts">
  export let id: string

  $: href = `/video-of-the-week/${id}`
</script>

<a {href}><slot>{id}</slot></a>
