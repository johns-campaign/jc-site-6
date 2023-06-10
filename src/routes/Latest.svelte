<script>
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import YouTubeVideoLink from "$lib/links/socials/YouTubeVideoLink.svelte"
</script>

<div class="latest">
  We're delighted to report that the Right to a Care Supporter Bill presented by
  Dan Carden on June 6 was accepted. The second reading is scheduled for
  November 24.
  <ExternalLink
    href="https://hansard.parliament.uk/commons/2023-06-06/debates/26AF1B7E-0BCC-4490-9721-435E3029AFB6/CareSupporters">
    Read the Hansard report here</ExternalLink>
  or
  <YouTubeVideoLink id="N0Zl2y4M5aw">
    watch Dan's speech on YouTube</YouTubeVideoLink
  >.
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
