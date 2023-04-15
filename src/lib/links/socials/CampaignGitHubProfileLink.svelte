<script lang="ts">
  import GitHubProfileLink from "./GitHubProfileLink.svelte"
  import {githubProfile} from "./pages"

  const id = githubProfile
</script>

<GitHubProfileLink {id}><slot>GitHub</slot></GitHubProfileLink>
