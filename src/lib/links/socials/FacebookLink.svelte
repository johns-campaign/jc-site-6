<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {facebook} from "./links"

  export let page: string

  $: href = facebook(page)
</script>

<ExternalLink {href}><slot>facebook.com/{page}</slot></ExternalLink>
