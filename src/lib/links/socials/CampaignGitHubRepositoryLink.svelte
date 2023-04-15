<script lang="ts">
  import GitHubRepositoryLink from "./GitHubRepositoryLink.svelte"
  import {githubRepository} from "./pages"

  const id = githubRepository
</script>

<GitHubRepositoryLink {id}><slot>GitHub</slot></GitHubRepositoryLink>
