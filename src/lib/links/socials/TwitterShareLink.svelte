<script lang="ts">
  import ExternalLink from "../ExternalLink.svelte"
  import {twitter} from "./links"

  export let thing: string
  export let page: string
  export let title: string

  $: query = {
    via: "JohnCampaign",
    text: title,
    url: `https://johnscampaign.org.uk/${page}`,
  }
  $: href = twitter(
    `share?${Object.entries(query)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&")}`,
  )
</script>

<ExternalLink {href}>Share {thing} on Twitter</ExternalLink>
