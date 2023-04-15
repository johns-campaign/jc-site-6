<script lang="ts">
  import {page} from "$app/stores"
  import AmbassadorContact from "$lib/ambassadors/AmbassadorContact.svelte"
  import AmbassadorContent from "$lib/ambassadors/AmbassadorContent.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreCollection from "$lib/firebase/FirestoreCollection.svelte"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import Head from "$lib/Head.svelte"
  import Image from "$lib/images/Image.svelte"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import AmbassadorLink from "$lib/links/pages/AmbassadorLink.svelte"
  import AmbassadorsLink from "$lib/links/pages/AmbassadorsLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import SignUpsMap from "$lib/maps/SignUpsMap.svelte"
  import Quote from "$lib/Quote.svelte"
  import type Ambassador from "$lib/types/Ambassador"
  import {collection, query, where} from "firebase/firestore"

  $: ref = `participants/${$page.params.participantId}`
  $: ambassadorsRef = query(
    collection(firestore, "ambassadors"),
    where("participant-id", "==", $page.params.participantId),
  )
  const ambassadorsCompare = (
    ambassador1: Ambassador,
    ambassador2: Ambassador,
  ) => ambassador1.name.localeCompare(ambassador2.name)
</script>

<div class="participant">
  <FirestoreDocument {ref} let:data={participant}>
    <Head title={participant.name} description={participant.pledge || ""} />

    <SignUpsMap signUps={participant["sign-ups"] || []} />
    {#if participant.figures}
      {#each participant.figures as figure}
        <figure class="right">
          {#each figure.images as image}
            <Image file={image} />
          {/each}
          <figcaption>
            {@html figure.description}
          </figcaption>
        </figure>
      {/each}
    {/if}
    <h1>
      {#if participant.href}
        <ExternalLink href={participant.href}>
          {participant.name}
        </ExternalLink>
      {:else}
        <ThisLink>
          {participant.name}
        </ThisLink>
      {/if}
    </h1>
    {#if participant.pledge}
      <Quote paragraphs={[participant.pledge]} />
    {/if}
    {#if participant.resources}
      <h2>Resources</h2>
      <ul>
        {#each participant.resources as resource}
          <li>
            <ExternalLink href={resource.href}>
              {@html resource.description}
            </ExternalLink>
          </li>
        {/each}
      </ul>
    {/if}
    {#if participant["sign-ups"]}
      <h2>Sign-ups</h2>
      <ul>
        {#each participant["sign-ups"] as signUp}
          <li>
            <p>
              {#if signUp.href}
                <ExternalLink href={signUp.href}>
                  {signUp.name}
                </ExternalLink>
              {:else}
                {signUp.name}
              {/if}
              <br />
              <ExternalLink
                href="https://maps.google.com/?q={signUp.name}, {signUp.place}">
                {signUp.place}
              </ExternalLink>
            </p>
            {#if signUp.pledge}
              <Quote paragraphs={[signUp.pledge]} />
            {/if}
            {#if signUp.resources}
              <ul>
                {#each signUp.resources as resource}
                  <li>
                    <ExternalLink href={resource.href}>
                      {@html resource.description}
                    </ExternalLink>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
    <FirestoreCollection
      ref={ambassadorsRef}
      compare={ambassadorsCompare}
      let:data={ambassadors}>
      {#if ambassadors.length}
        <h2><AmbassadorsLink /></h2>
        <ul>
          {#each ambassadors as ambassador}
            <li>
              <p>
                <AmbassadorLink id={ambassador.id}>
                  {ambassador.name}
                </AmbassadorLink>
              </p>
              <AmbassadorContent {ambassador} />
              <AmbassadorContact {ambassador} />
            </li>
          {/each}
        </ul>
      {/if}
    </FirestoreCollection>
  </FirestoreDocument>
</div>

<style lang="sass">
  .participant :global(.map)
    margin-block-start: 0
    margin-block-end: $l-gap
</style>
