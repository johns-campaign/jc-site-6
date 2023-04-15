<script lang="ts">
  import {page} from "$app/stores"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import Image from "$lib/images/Image.svelte"
  import ParticipantLink from "$lib/links/pages/ParticipantLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import type FromFirestore from "$lib/types/FromFirestore"
  import type Participant from "$lib/types/Participant"
  import {collection, query, where} from "firebase/firestore"
  import {onMount} from "svelte"
  import imagesLoaded from "imagesloaded"

  let filteringText: string = $page.url.searchParams.get("text") || ""

  const ref = query(
    collection(firestore, "participants"),
    where("sign-ups", "!=", []),
  )

  const predicate = (participant: FromFirestore<Participant>): boolean =>
    participant.figures?.length as any

  const map = (participant: FromFirestore<Participant>) =>
    participant.figures!.map((figure) => ({participant, figure}))

  type Item = {
    participant: Participant
    figure: {
      images: string[]
      description: string | undefined
    }
  }

  $: postdicate = (item: Item) =>
    filteringText == null || stringIn(filteringText, item.figure)
  // TODO: also filter by participant (name)?

  const key = (item: Item) =>
    `${item.participant.id} ${item.figure.images.join(" ")} ${
      item.figure.description
    }`

  // Here be dragons...

  let wrapper: HTMLElement

  const resizeList = (item: Element) => {
    const grid = wrapper.firstElementChild!
    console.log(item)
    const gridStyle = window.getComputedStyle(grid)
    const rowHeight = parseInt(gridStyle.getPropertyValue("grid-auto-rows"))
    const rowGap = parseInt(gridStyle.getPropertyValue("grid-row-gap"))
    const rowSpan = Math.ceil(
      (item.querySelector("figure")!.getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap),
    )
    item.setAttribute("style", `grid-row-end: span ${rowSpan}`)
    console.log(item.getAttribute("style"))
  }

  const resizeItems = () => {
    for (const child of wrapper.firstElementChild!.children) {
      resizeList(child)
    }
  }

  const resize = () =>
    window.requestAnimationFrame(() => {
      resizeItems()
      const images = wrapper.getElementsByTagName("img")
      for (const image of images) {
        imagesLoaded(
          image,
          (instance: ImagesLoaded.ImagesLoaded | undefined) => {
            if (instance === undefined) return
            const item = (instance as any).elements[0].parentElement
              .parentElement
            resizeList(item)
          },
        )
      }
    })

  onMount(() => {
    const observer = new MutationObserver((mutations, observer) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            if (
              element.tagName === "UL" &&
              element.classList.contains("pictures-list")
            ) {
              resize()
              window.addEventListener("resize", resizeItems)
              observer.disconnect()
            }
          }
        }
      }
    })
    observer.observe(wrapper, {childList: true})
    return observer.disconnect
  })

  const filter = (text: string) => {
    filteringText = text
    // const url = new URL($page.url)
    // if (filteringText) {
    //   url.searchParams.set("text", filteringText)
    // } else {
    //   url.searchParams.delete("text")
    // }
    // history.replaceState("", "", url)
    resize()
  }

  // TODO: stop the dragons messing up navigation
</script>

<Head title="Pictures" description="Pictures relevant to John's Campaign." />

<div class="pictures">
  <h1 class="top">
    <ThisLink>Pictures</ThisLink>
  </h1>
  <Filter
    text={filteringText}
    on:filter={(event) => filter(event.detail.text)} />
  <div bind:this={wrapper}>
    <FirestoreList
      {ref}
      {predicate}
      {map}
      {postdicate}
      {key}
      let:item
      class="pictures-list"
      itemClass="pictures-item">
      <figure>
        {#each item.figure.images as image}
          <Image file={image} />
        {/each}
        <figcaption>
          {#if item.figure.description}
            <p>{@html item.figure.description}</p>
          {/if}
          <p>
            From
            <ParticipantLink id={item.participant.id}>
              {item.participant.name}
            </ParticipantLink>
          </p>
        </figcaption>
      </figure>
    </FirestoreList>
  </div>
</div>

<style lang="sass">
  .pictures
    :global(.pictures-list)
      margin-block-start: $m-gap
      display: grid
      grid-gap: $l-gap
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
      grid-auto-rows: 20px
      :global(img)
        width: 100%
        height: auto
      :global(figcaption) :global(p)
        &:first-child
          margin-bottom: $xs-gap
        &:last-child
          font-size: smaller
          text-align: end
</style>
