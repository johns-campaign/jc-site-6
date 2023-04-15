<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {instagram} from "./links"

  export let page: string

  $: href = instagram(page)
</script>

<ExternalLink {href}><slot>instagram.com/{page}</slot></ExternalLink>
