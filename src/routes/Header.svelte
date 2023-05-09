<script>
  import Image from "$lib/images/Image.svelte"
  import HomeLink from "$lib/links/pages/HomeLink.svelte"
</script>

<header>
  <Image file="logo.jpg" class="logo" />
  <Image file="slogan-1.jpg" class="slogan-1" />
  <Image file="slogan-2.jpg" class="slogan-2" />
  <h1>
    <HomeLink>John's Campaign</HomeLink>
  </h1>
  <div class="beliefs">
    <h2>for the right to stay with people with dementia</h2>
    <h2>
      for the right of people with dementia to be supported by their family
      carers
    </h2>
  </div>
</header>

<style lang="sass">
header
  display: grid
  grid-template-areas: "logo" "title" "beliefs"
  grid-template-rows: auto
  grid-template-columns: auto
  align-items: center
  justify-items: center
  max-width: 340px
  text-align: center
  margin: $l-gap auto

h1,
h2
  margin: 0

h1
  grid-area: title
  color: $green
  font-size: 34.5pt
  align-self: end

h1 a
  background-position: 0% 87.5%
  background-size: 0% 3px
  &:hover
    background-size: 100% 3px

h2
  font-size: 13.8pt

h2:first-of-type
  color: $blue
  margin-block-start: $m-gap

h2:last-of-type
  color: $red
  margin-block-start: $s-gap

:global(.logo)
  grid-area: logo
  width: 120px
  margin-block-end: $m-gap
  margin-inline-end: $xs-gap

:global(.slogan-1),
:global(.slogan-2)
  display: none

:global(.slogan-1)
  grid-area: slogan-1

:global(.slogan-2)
  grid-area: slogan-2

:global(.beliefs)
  grid-area: beliefs
  align-self: start

@media (min-width: 274px)
  header
    grid-template-areas: "logo slogan-1" "title title" "beliefs beliefs"

    :global(.logo)
      width: 100px
      margin-block-end: $s-gap

    :global(.slogan-1)
      display: block
      width: auto
      height: 85px
      margin-block-end: $m-gap

@media (min-width: 365px)
  header
    grid-template-areas: "logo title" "beliefs beliefs"
    grid-template-columns: min-content auto

    :global(.logo)
      margin-inline-start: 18.5px
      margin-block-end: 0

    :global(.slogan-1)
      display: none
      margin-block-end: 0

  h1
    margin-block-start: -5px
    max-width: 200px

@media (min-width: $s-or-more)
  header
    grid-template-areas: "logo title" "logo beliefs"
    max-width: 100%

    :global(.logo)
      width: 152px
      margin-inline: 0

  h1
    font-size: 41pt
    margin-block-start: 0
    max-width: 100%

  h2
    font-size: 14pt

@media (min-width: $m-or-more)
  header
    &,
    :global(.logo),
    :global(.slogan-1)
      height: 124px

    :global(.slogan-1)
      display: block

  header
    grid-template-areas: "logo title slogan-1" "logo beliefs slogan-1"
    grid-template-columns: min-content auto min-content

  h1
    font-size: 40pt
    margin-block-start: -5px
    /* align-self: start */

@media (min-width: $l-or-more)
  header
    &,
    :global(.logo),
    :global(.slogan-2)
      height: 142px

    :global(.logo),
    :global(.slogan-2)
      width: auto

    :global(.slogan-1)
      display: none

    :global(.slogan-2)
      display: block

  header
    grid-template-areas: "logo title slogan-2" "logo beliefs slogan-2"

  h1
    font-size: 44.5pt

  h2
    font-size: 15.6pt

@media (min-width: $xl-or-more)
  header
    &,
    :global(.logo),
    :global(.slogan-2)
      height: 160px

  h1
    font-size: 47.7pt

  h2
    font-size: 16.7pt

  h1,
  .beliefs
    margin-inline: $xl-gap
</style>
