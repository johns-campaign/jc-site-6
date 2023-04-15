<script lang="ts">
  import {soundcloudProfile} from "./paths"
  import SoundCloudLink from "./SoundCloudLink.svelte"

  export let id: string

  $: page = soundcloudProfile(id)
</script>

<SoundCloudLink {page}><slot>@{id}</slot></SoundCloudLink>
