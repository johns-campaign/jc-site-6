<script lang="ts">
  import FacebookLink from "./FacebookLink.svelte"
  import {facebookProfile} from "./paths"

  export let id: string

  $: page = facebookProfile(id)
</script>

<FacebookLink {page}><slot>@{id}</slot></FacebookLink>
