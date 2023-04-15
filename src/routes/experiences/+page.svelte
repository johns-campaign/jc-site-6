<script lang="ts">
  import {page} from "$app/stores"
  import ExperienceContent from "$lib/experiences/ExperienceContent.svelte"
  import ExperienceDate from "$lib/experiences/ExperienceDate.svelte"
  import ExperienceFigure from "$lib/experiences/ExperienceFigure.svelte"
  import ExperienceName from "$lib/experiences/ExperienceName.svelte"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import Voices1Link from "$lib/links/pages/Voices1Link.svelte"
  import Voices2Link from "$lib/links/pages/Voices2Link.svelte"
  import Voices3Link from "$lib/links/pages/Voices3Link.svelte"
  import Voices4Link from "$lib/links/pages/Voices4Link.svelte"
  import VoicesLink from "$lib/links/pages/VoicesLink.svelte"
  import CampaignFacebookProfileLink from "$lib/links/socials/CampaignFacebookProfileLink.svelte"
  import CampaignTwitterProfileLink from "$lib/links/socials/CampaignTwitterProfileLink.svelte"
  import type Experience from "$lib/types/Experience"
  import type FromFirestore from "$lib/types/FromFirestore"
  import {collection, orderBy, query, where} from "firebase/firestore"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(
    collection(firestore, "experiences"),
    where("timestamp", "<=", new Date()),
    orderBy("timestamp", "desc"),
  )

  $: predicate = (experience: FromFirestore<Experience>) =>
    filteringText == null || stringIn(filteringText, experience)

  const filter = (text: string) => {
    filteringText = text
    // const url = new URL($page.url)
    // if (filteringText) {
    //   url.searchParams.set("text", filteringText)
    // } else {
    //   url.searchParams.delete("text")
    // }
    // history.replaceState("", "", url)
  }
</script>

<Head
  title="Experiences"
  description="Stories people have shared about their experiences." />

<h1 class="top">
  <ThisLink>Experiences</ThisLink>
</h1>
<p>
  Throughout the campaign people have written in - often via our
  <CampaignFacebookProfileLink>Facebook</CampaignFacebookProfileLink>
  and
  <CampaignTwitterProfileLink>Twitter</CampaignTwitterProfileLink>
  pages - showing support and sharing their stories. This is an area that has grown
  hugely (and distressingly) in the past year. We intend, therefore, to find some
  more meaningful way of recording these, perhaps on a dedicated site.
</p>
<p>
  People are often willing to write about sad (even traumatic) events, in the
  hope that these will help others in the future, and we are very grateful to
  them for doing so. Please note that we never share people's experiences
  without their express permission.
</p>
<p>
  The experiences below were contributed whilst we were a hospital access
  campaign.
</p>
<p>
  You will find many individual experiences on our blog page, and also in our
  <VoicesLink />
  collections.
  <Voices1Link />
  and
  <Voices2Link>II</Voices2Link>
  are overlapping booklets produced for distribution at our London and Scottish conferences.
  Some of the speakers at the London conference were recorded and can be listened
  to on our YouTube page. <Voices3Link /> represents some specific research into
  the experiences of people with dementia in the mental health system. Some names
  were changed on these pages, but all are included with permission. <Voices4Link />
  records a moment in the summer of 2018, when we asked all the English hospital
  trusts to review the pledges they had made and to share resources and articulate
  their support.
</p>
<Filter text={filteringText} on:filter={(event) => filter(event.detail.text)} />
<FirestoreList
  {ref}
  {predicate}
  let:item={experience}
  lazy
  initial={2}
  increment={1}>
  <ExperienceFigure {experience} />
  <ExperienceName {experience} level={2} />
  <ExperienceDate {experience} level={3} />
  <ExperienceContent {experience} />
</FirestoreList>
