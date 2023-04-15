<script lang="ts">
  import {youtubeChannel} from "./paths"
  import YouTubeLink from "./YouTubeLink.svelte"

  export let id: string

  $: page = youtubeChannel(id)
</script>

<YouTubeLink {page}><slot>@{id}</slot></YouTubeLink>
