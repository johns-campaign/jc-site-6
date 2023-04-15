<script lang="ts">
  import FacebookProfileLink from "./FacebookProfileLink.svelte"
  import {welshFacebook} from "./pages"

  const id = welshFacebook
</script>

<FacebookProfileLink {id}><slot>Facebook (Wales)</slot></FacebookProfileLink>
