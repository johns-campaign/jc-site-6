<script lang="ts">
  import FacebookGroupLink from "./FacebookGroupLink.svelte"
  import {careHomeAndSupportFacebookGroup} from "./pages"

  const id = careHomeAndSupportFacebookGroup
</script>

<FacebookGroupLink {id}><slot>Facebook (Care)</slot></FacebookGroupLink>
