<script lang="ts">
  import {formatAuthors} from "$lib/format"
  import Voices3ExperienceLink from "$lib/links/pages/Voices3ExperienceLink.svelte"
  import type ExperienceOfCare from "$lib/types/Voices/3/ExperienceOfCare"

  export let experience: ExperienceOfCare
</script>

<Voices3ExperienceLink id={experience.id}>
  {formatAuthors(experience.names)}
</Voices3ExperienceLink>
