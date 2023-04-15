<script lang="ts">
  import GitHubRepositoryIssuesLink from "./GitHubRepositoryIssuesLink.svelte"
  import {githubRepository} from "./pages"

  const id = githubRepository
</script>

<GitHubRepositoryIssuesLink {id}>
  <slot>issues</slot></GitHubRepositoryIssuesLink>
