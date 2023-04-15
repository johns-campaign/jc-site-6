<script lang="ts">
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import {soundcloud} from "./links"

  export let page: string

  $: href = soundcloud(page)
</script>

<ExternalLink {href}><slot>soundcloud.com/{page}</slot></ExternalLink>
