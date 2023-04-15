<script lang="ts">
  export let number: string

  $: href = `tel:${number}`
</script>

<a {href}><slot>{number}</slot></a>
