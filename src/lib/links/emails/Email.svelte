<script lang="ts">
  export let address: string

  $: href = `mailto:${address}`
</script>

<a {href}><slot>{address}</slot></a>
