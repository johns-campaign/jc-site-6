<script lang="ts">
  import ImageLink from "./ImageLink.svelte"

  export let file: string
</script>

<ImageLink dir="ambassadors" {file}><slot /></ImageLink>
