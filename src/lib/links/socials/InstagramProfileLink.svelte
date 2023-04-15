<script lang="ts">
  import InstagramLink from "./InstagramLink.svelte"
  import {instagramProfile} from "./paths"

  export let id: string

  $: page = instagramProfile(id)
</script>

<InstagramLink {page}><slot>@{id}</slot></InstagramLink>
