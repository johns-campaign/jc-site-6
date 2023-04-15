<script lang="ts">
  import FacebookLink from "./FacebookLink.svelte"
  import {facebookGroup} from "./paths"

  export let id: string

  $: page = facebookGroup(id)
</script>

<FacebookLink {page}><slot>{id}</slot></FacebookLink>
