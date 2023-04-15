<script lang="ts">
  import Link from "$lib/links/Link.svelte"
  import type NavLink from "./NavLink"

  export let link: NavLink
</script>

<div class="nav-link">
  <Link href={link.href} same={link.same}>{link.text}</Link>
</div>

<style lang="sass">
  .nav-link :global(a)
    font-family: $button-font
    font-size: 12.3pt
    font-weight: 500
    text-align: center
    padding: 17px 30px
    transition: background-color 300ms, color 300ms
    transition-delay: 0
    display: block
    width: 100%
    &:hover
      background-color: $blue
      color: $white
      text-shadow: none
      background-size: 0%
</style>
