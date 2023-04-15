<script lang="ts">
  import {
    campaignFacebookProfile,
    campaignSoundCloudProfile,
    campaignTwitterProfile,
    campaignYouTubeChannel,
    careHomeAndSupportFacebookGroup,
    welshFacebookProfile,
  } from "$lib/links/socials/links"
  import type NavType from "./Nav"
  import Nav from "./Nav.svelte"

  let nav: NavType = {
    items: [
      {
        text: "Facebook",
        href: campaignFacebookProfile,
        same: false,
      },
      {
        text: "Facebook (Care)",
        href: careHomeAndSupportFacebookGroup,
        same: false,
      },
      {
        text: "Facebook (Wales)",
        href: welshFacebookProfile,
        same: false,
      },
      {
        text: "Twitter",
        href: campaignTwitterProfile,
        same: false,
      },
      {
        text: "YouTube",
        href: campaignYouTubeChannel,
        same: false,
      },
      {
        text: "SoundCloud",
        href: campaignSoundCloudProfile,
        same: false,
      },
    ],
  }
</script>

<Nav {nav} />
