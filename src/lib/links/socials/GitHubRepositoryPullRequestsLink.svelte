<script lang="ts">
  import GitHubLink from "./GitHubLink.svelte"
  import {githubRepositoryPullRequests} from "./paths"

  export let id: string

  $: page = githubRepositoryPullRequests(id)
</script>

<GitHubLink {page}><slot>{id} pull requests</slot></GitHubLink>
