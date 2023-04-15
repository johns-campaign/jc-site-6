<script lang="ts">
  import Image from "./Image.svelte"

  export let file: string
</script>

<Image dir="posts" {file} />
