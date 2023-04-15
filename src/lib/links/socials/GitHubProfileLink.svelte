<script lang="ts">
  import GitHubLink from "./GitHubLink.svelte"
  import {githubProfile} from "./paths"

  export let id: string

  $: page = githubProfile(id)
</script>

<GitHubLink {page}><slot>@{id}</slot></GitHubLink>
