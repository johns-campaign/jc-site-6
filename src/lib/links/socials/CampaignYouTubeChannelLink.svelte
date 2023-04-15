<script lang="ts">
  import YouTubeChannelLink from "./YouTubeChannelLink.svelte"
  import {youtube} from "./pages"

  const id = youtube
</script>

<YouTubeChannelLink {id}><slot>YouTube</slot></YouTubeChannelLink>
