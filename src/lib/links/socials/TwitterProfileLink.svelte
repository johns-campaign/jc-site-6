<script lang="ts">
  import {twitterProfile} from "./paths"
  import TwitterLink from "./TwitterLink.svelte"

  export let id: string

  $: page = twitterProfile(id)
</script>

<TwitterLink {page}><slot>@{id}</slot></TwitterLink>
