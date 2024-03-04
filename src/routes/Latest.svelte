<script>
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  // import YouTubeVideoLink from "$lib/links/socials/YouTubeVideoLink.svelte"
</script>

<div class="latest">
  Johns Campaign and Care Rights UK are core participants in module 2b of the
  Covid Inquiry. Public Hearings began in Cardiff on Tuesday February 27th and
  will run until March 14th 2024. This module examines core decision making by
  the Welsh government. You can follow on YouTube or catch up with the Inquiry
  via daily transcripts.
  <ExternalLink href="https://www.youtube.com/watch?v=CDJA1p5OI7Q&t=1460"
    >Here's our counsel's opening statement.</ExternalLink>
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
