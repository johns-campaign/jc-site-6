<script lang="ts">
  import GitHubRepositoryPullRequestsLink from "./GitHubRepositoryPullRequestsLink.svelte"
  import {githubRepository} from "./pages"

  const id = githubRepository
</script>

<GitHubRepositoryPullRequestsLink {id}>
  <slot>pull requests</slot></GitHubRepositoryPullRequestsLink>
