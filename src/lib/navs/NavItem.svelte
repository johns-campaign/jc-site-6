<script lang="ts">
  import type NavItem from "./NavItem"
  import NavLink from "./NavLink.svelte"
  import NavMenu from "./NavMenu.svelte"

  export let item: NavItem
</script>

{#if "links" in item}
  <NavMenu menu={item} />
{:else}
  <NavLink link={item} />
{/if}
