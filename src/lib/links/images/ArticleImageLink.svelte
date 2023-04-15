<script lang="ts">
  import ImageLink from "./ImageLink.svelte"

  export let file: string
</script>

<ImageLink dir="articles" {file}><slot /></ImageLink>
