<script lang="ts">
  import type Nav from "./Nav"
  import NavItem from "./NavItem.svelte"

  export let nav: Nav
</script>

<nav>
  {#if nav.items}
    <ul class="unstyled">
      {#each nav.items as item}
        <li><NavItem {item} /></li>
      {/each}
    </ul>
  {/if}
</nav>

<style lang="sass">
  nav
    border-block-end-style: solid

  ul
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    align-items: stretch
    justify-content: space-evenly
    @media (min-width: $s-or-more)
      align-items: normal
      flex-direction: row
      flex-wrap: wrap
    @media (min-width: $m-or-more)
      align-items: stretch
      flex-direction: column
      flex-wrap: nowrap
      justify-content: normal
</style>
