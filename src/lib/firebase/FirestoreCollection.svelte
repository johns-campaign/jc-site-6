<script lang="ts">
  import {Collection} from "sveltefire"
  import {firestore} from "$lib/firebase"
  import type {CollectionReference, Query} from "firebase/firestore"

  export let ref: string | CollectionReference | Query
  export let predicate: ((item: any) => boolean) | undefined = undefined
  export let map: ((item: any) => any) | undefined = undefined
  export let postdicate: ((item: any) => boolean) | undefined = undefined
  export let compare: ((item1: any, item2: any) => number) | undefined =
    undefined

  $: process = (items: any[]) => {
    let processedItems = predicate
      ? items.filter(predicate)
      : compare
      ? items.slice()
      : items
    if (map) {
      let flatten = false
      processedItems = processedItems.map((item) => {
        const mapped = map!(item)
        if (!flatten && Array.isArray(mapped)) {
          flatten = true
        }
        return mapped
      })
      if (flatten) {
        processedItems = processedItems.flat()
      }
      if (postdicate) {
        processedItems = processedItems.filter(postdicate)
      }
    }
    if (compare) {
      processedItems.sort(compare)
    }
    return processedItems
  }
</script>

<Collection {firestore} {ref} let:data>
  <slot data={process(data)}>
    <pre>{JSON.stringify(process(data), null, 2)}</pre>
  </slot>
</Collection>
