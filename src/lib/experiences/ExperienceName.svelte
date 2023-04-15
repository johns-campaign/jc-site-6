<script lang="ts">
  import type Experience from "$lib/types/Experience"
  import Heading from "$lib/Heading.svelte"
  import ExperienceLink from "$lib/links/pages/ExperienceLink.svelte"

  export let experience: Experience
  export let level: number
</script>

<Heading {level}>
  <ExperienceLink id={experience.id}>
    {experience.name}
  </ExperienceLink>
</Heading>
