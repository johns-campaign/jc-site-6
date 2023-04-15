<script lang="ts">
  import Link from "./Link.svelte"
  export let href: string
</script>

<Link {href} same={false}><slot>{href}</slot></Link>
