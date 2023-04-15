<script lang="ts">
  import DocLink from "./DocLink.svelte"

  export let file: string
</script>

<DocLink dir="external" {file}><slot /></DocLink>
