<script lang="ts">
  import GitHubLink from "./GitHubLink.svelte"
  import {githubRepository} from "./paths"

  export let id: string

  $: page = githubRepository(id)
</script>

<GitHubLink {page}><slot>{id}</slot></GitHubLink>
