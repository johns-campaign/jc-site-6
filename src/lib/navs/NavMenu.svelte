<script lang="ts">
  import NavLink from "./NavLink.svelte"
  import type NavMenu from "./NavMenu"

  export let menu: NavMenu
</script>

<div class="nav-menu">
  <NavLink link={menu.link} />
  {#if menu.links.length}
    <ul class="s-or-more unstyled">
      {#each menu.links as link}
        <li><NavLink {link} /></li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="sass">
  .nav-menu
    position: relative
    &:hover
      ul
        display: block

  ul
    display: none
    position: absolute
    border-style: solid
    background: $white
    width: 200px
    @media (min-width: $s-or-more)
      inset-block-start: 100%
      inset-inline-end: 0
    @media (min-width: $m-or-more)
      inset-inline-end: 100%
      inset-block-start: 0
</style>
