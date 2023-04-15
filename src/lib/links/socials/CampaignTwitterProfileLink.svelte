<script lang="ts">
  import TwitterProfileLink from "./TwitterProfileLink.svelte"
  import {twitter} from "./pages"

  $: id = twitter
</script>

<TwitterProfileLink {id}><slot>Twitter</slot></TwitterProfileLink>
