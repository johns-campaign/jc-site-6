<script lang="ts">
  import type Ambassador from "$lib/types/Ambassador"
  import contactable from "./contactable"
  import Email from "$lib/links/emails/Email.svelte"
  import FacebookProfileLink from "$lib/links/socials/FacebookProfileLink.svelte"
  import InstagramProfileLink from "$lib/links/socials/InstagramProfileLink.svelte"
  import TwitterProfileLink from "$lib/links/socials/TwitterProfileLink.svelte"

  export let ambassador: Ambassador
  export let listOnly: boolean = false

  $: ({email, emails, facebook, instagram, twitter, twitters, phone} =
    ambassador.contact)
</script>

{#if contactable(ambassador)}
  {#if !listOnly}
    You can contact {ambassador.pronoun} via:
  {/if}
  <ul class="right-of-float">
    {#if email}
      <li>
        Email:
        <Email address={email} />
      </li>
    {/if}
    {#if emails}
      {#if emails.home}
        <li>
          Email (home):
          <Email address={emails.home} />
        </li>
      {/if}
      {#if emails.work}
        <li>
          Email (work):
          <Email address={emails.work} />
        </li>
      {/if}
    {/if}
    {#if facebook}
      <li>
        Facebook:
        <FacebookProfileLink id={facebook} />
      </li>
    {/if}
    {#if instagram}
      <li>
        Instagram:
        <InstagramProfileLink id={instagram} />
      </li>
    {/if}
    {#if twitter}
      <li>
        Twitter:
        <TwitterProfileLink id={twitter} />
      </li>
    {/if}
    {#if twitters}
      {#each twitters as twitter (twitter)}
        <li>
          Twitter:
          <TwitterProfileLink id={twitter} />
        </li>
      {/each}
    {/if}
    {#if phone}
      <li>
        Phone:
        {phone}
      </li>
    {/if}
  </ul>
{/if}
