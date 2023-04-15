<script lang="ts">
  import GitHubLink from "./GitHubLink.svelte"
  import {githubRepositoryIssues} from "./paths"

  export let id: string

  $: page = githubRepositoryIssues(id)
</script>

<GitHubLink {page}><slot>{id} issues</slot></GitHubLink>
