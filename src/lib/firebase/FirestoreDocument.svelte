<script lang="ts">
  import type {DocumentReference} from "firebase/firestore"
  import {Doc} from "sveltefire"
  import {firestore} from "$lib/firebase"

  export let ref: string | DocumentReference
</script>

<Doc {firestore} {ref} let:data let:ref>
  <slot data={{id: ref?.id, ref, ...data}}>
    <pre>{JSON.stringify({id: ref?.id, ref, ...data}, null, 2)}</pre>
  </slot>
</Doc>
