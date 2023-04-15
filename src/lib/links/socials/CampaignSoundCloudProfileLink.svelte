<script lang="ts">
  import SoundCloudProfileLink from "./SoundCloudProfileLink.svelte"
  import {soundcloud} from "./pages"

  const id = soundcloud
</script>

<SoundCloudProfileLink {id}><slot>SoundCloud</slot></SoundCloudProfileLink>
