<script lang="ts">
  import InfiniteScroll from "svelte-infinite-scroll"

  export let items: any[]
  export let unstyled = false
  export let ordered = false
  export let lazy = false
  export let initial = 10
  export let increment = 10
  export let threshold = 300
  export let itemClass = ""
  export let key: ((item: any) => string) | undefined = undefined

  let increments = 0

  $: loaded = initial + increment * increments

  $: loadedItems = lazy ? items.slice(0, loaded) : items

  let class_ = ""
  export {class_ as class}
</script>

{#if ordered}
  <ol class={class_}>
    {#each loadedItems as item, index (key ? key(item) : index)}
      <li class={itemClass}>
        <slot {item} />
      </li>
    {/each}
  </ol>
{:else}
  <ul class="{unstyled ? 'unstyled' : ''} {class_}">
    {#each loadedItems as item, index (key ? key(item) : index)}
      <li class={itemClass}>
        <slot {item} />
      </li>
    {/each}
  </ul>
{/if}
{#if lazy}
  <InfiniteScroll {threshold} window on:loadMore={() => increments++} />
{/if}
