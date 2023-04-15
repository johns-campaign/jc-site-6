<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {youtubeVideo} from "./links"

  export let id: string

  $: href = youtubeVideo(id)
</script>

<ExternalLink {href}><slot>{id}</slot></ExternalLink>
