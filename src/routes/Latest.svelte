<script>
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  // import YouTubeVideoLink from "$lib/links/socials/YouTubeVideoLink.svelte"
</script>

<div class="latest">
  On Monday December 18th Helen Whately, Minister of State at the DHSC, laid an
  amendment to the 2008 Health and Care Act before Parliament. From April 2024
  visiting will become a Fundamental Standard in care homes, hospitals and
  hospices.
  <ExternalLink href="https://www.legislation.gov.uk/uksi/2023/1402/made"
    >Read the amendment here.</ExternalLink>
</div>

<style lang="sass">
  .latest
    border-bottom-style: solid
    padding-block: $m-gap
    padding-inline-end: $m-gap
    &::before
      content: 'Latest: '
      font-weight: bold
</style>
