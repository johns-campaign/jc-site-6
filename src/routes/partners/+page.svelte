<script lang="ts">
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import PartnerImage from "$lib/images/PartnerImage.svelte"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import PartnerImageLink from "$lib/links/images/PartnerImageLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import Quote from "$lib/Quote.svelte"
</script>

<Head
  title="Partners"
  description="People and organisations partnered with John's Campaign." />

<h1 class="top">
  <ThisLink>Partners</ThisLink>
</h1>
<div class="partners">
  <FirestoreList ref="partners" let:item={partner}>
    <ExternalLink href={partner.href}>
      <PartnerImage file={partner.logo} />
    </ExternalLink>
  </FirestoreList>
</div>
<div class="statements">
  <FirestoreList ref="statements" let:item={statement}>
    <figure>
      {#if statement.href}
        <ExternalLink href={statement.href}>
          <PartnerImage file={statement.image.file} />
        </ExternalLink>
      {:else if statement.image["caption-href"]}
        <ExternalLink href={statement.image["caption-href"]}>
          <PartnerImage file={statement.image.file} />
        </ExternalLink>
      {:else}
        <PartnerImageLink file={statement.image.file}>
          <PartnerImage file={statement.image.file} />
        </PartnerImageLink>
      {/if}
      {#if statement.image.caption}
        <figcaption>
          {#if statement.image["caption-href"]}
            <ExternalLink href={statement.image["caption-href"]}>
              {statement.image.caption}
            </ExternalLink>
          {:else}
            {statement.image.caption}
          {/if}
        </figcaption>
      {/if}
    </figure>
    <h2>
      {statement.title}
    </h2>
    {#if statement.subtitle}
      <h3>
        {statement.subtitle}
      </h3>
    {/if}
    <Quote paragraphs={statement.content} />
  </FirestoreList>
</div>

<style lang="sass">
  .partners
    padding-block: $l-gap
    & > :global(ul)
      // :global(a):hover
      //   background-size: 0%
      :global(li)
        margin-block-end: $l-gap
        @media (min-width: $xl-or-more)
          margin-block-end: 31px
      line-height: 0
      column-count: 2
      column-gap: $m-gap
      @media (min-width: $s-or-more)
        column-count: 3
        column-gap: $l-gap
      @media (min-width: $l-or-more)
        column-count: 4
      @media (min-width: $xl-or-more)
        column-count: 5
  .statements
    & > :global(ul) > :global(li)
      margin-block-start: $l-gap
</style>
