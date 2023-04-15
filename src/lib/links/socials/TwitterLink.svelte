<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {twitter} from "./links"

  export let page: string

  $: href = twitter(page)
</script>

<ExternalLink {href}><slot>twitter.com/{page}</slot></ExternalLink>
