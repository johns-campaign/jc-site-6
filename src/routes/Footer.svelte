<script>
  import ContactLink from "$lib/links/pages/ContactLink.svelte"
  import JuliasEmail from "$lib/links/emails/JuliasEmail.svelte"
  import JuliasPhone from "$lib/links/phones/JuliasPhone.svelte"
  import NiccisEmail from "$lib/links/emails/NiccisEmail.svelte"
</script>

<footer>
  <h3>
    <ContactLink>Contact Us</ContactLink>
  </h3>
  <p>
    To get in touch, email Julia Jones (<JuliasEmail />) and/or Nicci Gerrard (<NiccisEmail />).
  </p>
  <p>
    Julia can also be reached by phone on <JuliasPhone />. For more information,
    see <ContactLink>our contact page</ContactLink>.
  </p>
</footer>

<style lang="sass">
  footer
    margin-block: $l-gap

  h3
    margin-block-start: 0

  p
    text-align: start

  p:last-of-type
    margin-block-end: 0
</style>
