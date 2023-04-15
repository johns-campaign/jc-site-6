<script lang="ts">
  import type {CollectionReference, Query} from "firebase/firestore"
  import List from "$lib/List.svelte"
  import FirestoreCollection from "./FirestoreCollection.svelte"

  export let ref: string | CollectionReference | Query
  export let predicate: ((item: any) => boolean) | undefined = undefined
  export let map: ((item: any) => any) | undefined = undefined
  export let postdicate: ((item: any) => boolean) | undefined = undefined
  export let compare: ((item1: any, item2: any) => number) | undefined =
    undefined
  export let styled = false
  export let ordered = false
  export let lazy = false
  export let initial = 10
  export let increment = 10
  export let threshold = 300
  export let itemClass = ""
  export let key: ((item: any) => string) | "index" | undefined = undefined

  const idKey = (item: {id: string}) => item.id

  let class_ = ""
  export {class_ as class}
</script>

<FirestoreCollection
  {ref}
  {predicate}
  {map}
  {postdicate}
  {compare}
  let:data={items}>
  {#if items.length}
    <List
      {items}
      unstyled={!styled}
      {ordered}
      {lazy}
      {initial}
      {increment}
      {threshold}
      class={class_}
      itemClass="clear-after {itemClass}"
      key={key === "index" ? undefined : key || idKey}
      let:item>
      <slot {item}>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </slot>
    </List>
  {/if}
</FirestoreCollection>
