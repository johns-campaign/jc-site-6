<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {youtube} from "./links"

  export let page: string

  $: href = youtube(page)
</script>

<ExternalLink {href}><slot>youtube.com/{page}</slot></ExternalLink>
