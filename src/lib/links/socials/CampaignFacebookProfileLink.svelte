<script lang="ts">
  import FacebookProfileLink from "./FacebookProfileLink.svelte"
  import {facebook} from "./pages"

  const id = facebook
</script>

<FacebookProfileLink {id}><slot>Facebook</slot></FacebookProfileLink>
