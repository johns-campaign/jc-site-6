<script>
  import ExternalLink from "$lib/links/ExternalLink.svelte"
</script>

<div class="latest">
  Preliminary hearings for the
  <ExternalLink href="https://covid19.public-inquiry.uk/">
    Covid Inquiry</ExternalLink>
  are underway for modules 2 & 3. As Ymgyrch John we are Core Participants in Module
  2b which examines policy making in Wales. We work together with the
  <ExternalLink href="https://www.relres.org/">
    Relatives & Residents Association</ExternalLink>
  and the
  <ExternalLink href="https://www.patients-association.org.uk/">
    Patients Association</ExternalLink>
  for Module 3, examining the impact on healthcare systems. Our focus throughout
  is on people.
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
