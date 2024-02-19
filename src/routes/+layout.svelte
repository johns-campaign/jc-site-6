<script lang="ts">
  import MainNav from "$lib/navs/MainNav.svelte"
  import SocialsNav from "$lib/navs/SocialsNav.svelte"
  import "$styles/app.sass"
  import Footer from "./Footer.svelte"
  import Header from "./Header.svelte"
  import Latest from "./Latest.svelte"
  // import TwitterTimeline from "./TwitterTimeline.svelte"
</script>

<div class="container">
  <Header />
  <div class="s-or-less">
    <MainNav />
    <Latest />
    <main>
      <slot />
    </main>
    <SocialsNav />
  </div>
  <div class="m-or-more">
    <div class="content">
      <Latest />
      <main>
        <slot />
      </main>
    </div>
    <div class="sidebar">
      <MainNav />
      <SocialsNav />
      <!-- <TwitterTimeline /> -->
    </div>
  </div>
  <Footer />
</div>

<style lang="sass">
  .container
    margin-inline: auto
    padding: 0
    width: 100%
    @media (min-width: $s-or-more)
      width: 540px
    @media (min-width: $m-or-more)
      width: 720px
    @media (min-width: $l-or-more)
      width: 960px
    @media (min-width: $xl-or-more)
      width: 1140px
    & > div
      border-block-start-style: solid
      &.s-or-less > main
        border-block-end-style: solid
      &.m-or-more
        border-block-end-style: solid
        display: flex
        main
          padding-inline-end: $m-gap

  main
    padding-block: $l-gap

  .content
    flex: 1

  .sidebar
    border-inline-start-style: solid
    display: flex
    flex-direction: column
    width: 170px
    @media (min-width: $m-or-more)
      width: 188px
    @media (min-width: $l-or-more)
      width: 225px
    @media (min-width: $xl-or-more)
      width: 250px
    :global(div.twitter-timeline)
      flex: 1
</style>
