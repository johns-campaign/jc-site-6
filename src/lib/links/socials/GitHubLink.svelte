<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {github} from "./links"

  export let page: string

  $: href = github(page)
</script>

<ExternalLink {href}><slot>github.com/{page}</slot></ExternalLink>
