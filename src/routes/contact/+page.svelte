<script lang="ts">
  import Head from "$lib/Head.svelte"
  import AmbassadorImage from "$lib/images/AmbassadorImage.svelte"
  import BertiesEmail from "$lib/links/emails/BertiesEmail.svelte"
  import JuliasEmail from "$lib/links/emails/JuliasEmail.svelte"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import AmbassadorLink from "$lib/links/pages/AmbassadorLink.svelte"
  import AmbassadorsLink from "$lib/links/pages/AmbassadorsLink.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import ParticipantsLink from "$lib/links/pages/ParticipantsLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import JuliasPhone from "$lib/links/phones/JuliasPhone.svelte"
  import CampaignFacebookProfileLink from "$lib/links/socials/CampaignFacebookProfileLink.svelte"
  import CampaignGitHubRepositoryIssuesLink from "$lib/links/socials/CampaignGitHubRepositoryIssuesLink.svelte"
  import CampaignGitHubRepositoryLink from "$lib/links/socials/CampaignGitHubRepositoryLink.svelte"
  import CampaignGitHubRepositoryPullRequestsLink from "$lib/links/socials/CampaignGitHubRepositoryPullRequestsLink.svelte"
  import CampaignTwitterProfileLink from "$lib/links/socials/CampaignTwitterProfileLink.svelte"
  import CareHomeAndSupportFacebookGroupLink from "$lib/links/socials/CareHomeAndSupportFacebookGroupLink.svelte"
</script>

<Head title="Contact" description="Contact details for John's Campaign." />

<h1 class="top">
  <ThisLink>Contact</ThisLink>
</h1>
<figure class="right">
  <AmbassadorImage file="gillian-corbett.jpg" />
  <figcaption>
    <AmbassadorLink id="gillian-mcauley">Gillian McAuley</AmbassadorLink>, Nurse
    Director Acute Services
    <ParticipantLink id="nhs-lothian">NHS Lothian</ParticipantLink>, John's
    Campaign Ambassador and the person who first suggested the concept of
    Ambassadors
  </figcaption>
</figure>
<figure class="right">
  <AmbassadorImage file="adam-purnell.jpg" />
  <figcaption>
    <AmbassadorLink id="adam-purnell">Adam Purnell</AmbassadorLink>, Care Lead
    <ParticipantLink id="kepplegate">Kepplegate Care</ParticipantLink>, John's
    Campaign Ambassador and Co-ordinator of
    <CareHomeAndSupportFacebookGroupLink
      >the John's Campaign Care Home & Support Group on Facebook</CareHomeAndSupportFacebookGroupLink>
  </figcaption>
</figure>
<p>
  We welcome contacts via
  <JuliasEmail>email</JuliasEmail>, <CampaignTwitterProfileLink>
    Twitter</CampaignTwitterProfileLink> & <CampaignFacebookProfileLink>
    Facebook</CampaignFacebookProfileLink
  >. We do answer (though there are only two of us) so if you haven't had a
  reply within a week, do try again just in case your message hasn't reached us.
  There is a telephone number <JuliasPhone /> and a postal address: Sokens, Green
  Street, Pleshey, Chelmsford, Essex CM3 1HT
</p>
<p>
  Because there are only two of us (unpaid and using our ‘spare time’) we may
  not be able to do as many talks and visits as we would like. We will help
  where we can - travel expenses are always welcome.
</p>
<p>
  We have a network of <AmbassadorsLink>
    John's Campaign Ambassadors</AmbassadorsLink> who are willing to offer their
  experience and good practice.
</p>
<ul>
  <li>
    If you are ready to sign up, we need a 50 word pledge - email this to Julia
    Jones (<JuliasEmail />) and we'll list you on <ParticipantsLink>
      our participants page</ParticipantsLink> and on <ExternalLink
      href="https://www.theguardian.com/society/2015/jul/25/johns-campaign-listing-hospitals-that-welcome-carers">
      the Observer site</ExternalLink
    >.
  </li>
  <li>
    If you are already signed up and have useful resources you would like to
    share, send them over either to Julia Jones or webmaster Bertie Wheen (<BertiesEmail />).
  </li>
  <li>
    If you have personal experience you would like to share - as a patient, a
    carer, a health professional, a charity worker or someone in the residential
    sector - we would like to hear from you. Please get in touch with Julia.
  </li>
</ul>
<p>
  This website has been redesigned (again) and will continue to evolve as the
  campaign develops. If you are searching for something that you can't find,
  notice anything wrong or have suggestions for improvement, email Bertie at <BertiesEmail />
  (or open an
  <CampaignGitHubRepositoryIssuesLink>issue</CampaignGitHubRepositoryIssuesLink>
  /
  <CampaignGitHubRepositoryPullRequestsLink>
    pull request
  </CampaignGitHubRepositoryPullRequestsLink>
  on
  <CampaignGitHubRepositoryLink>GitHub</CampaignGitHubRepositoryLink>).
</p>
