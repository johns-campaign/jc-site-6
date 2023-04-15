<script lang="ts">
  import {createEventDispatcher} from "svelte"

  export let text: string | undefined = undefined
  export let textPlaceholder = "Enter search text..."
  export let tags: string[] | undefined = undefined
  export let tagsSet: string[] = []

  let text_: string
  let tags_: string[]

  // $: placeholder = typeof text === "string" ? text : ""

  const dispatch = createEventDispatcher()

  const addTag = () => {
    console.log(tags)
    console.log(tags_)
    tags_ = [...tags_!, ""]
    console.log(tags)
    console.log(tags_)
  }
  const removeTag = (index: number) =>
    (tags_ = [...tags_!.slice(0, index), ...tags_!.slice(index + 1)])
  const changeTag = (index: number, tag: string) => (tags_![index] = tag)

  // TODO make datalist id / input names unique

  $: if (text !== undefined) {
    text_ = text
  }
  $: if (tags !== undefined) {
    tags_ = tags.slice()
  }

  const submit = () => {
    dispatch("filter", {
      text: text_,
      tags: tags_,
    })
  }
</script>

<form on:submit|preventDefault={submit}>
  <div class="filters">
    {#if text !== undefined}
      <div class="filter">
        <div>
          <label for="text-filter">Text:</label>
        </div>
        <input
          name="text-filter"
          placeholder={textPlaceholder}
          bind:value={text_} />
      </div>
    {/if}
    {#if tags}
      <div class="filter tags-filter">
        <div>
          <label for="tags-filter">Tags:</label>
        </div>
        <div>
          {#each tags_ as tag, index (index)}
            <div>
              <input
                type="button"
                on:click={() => removeTag(index)}
                value="-" />
              <input
                list="tags-datalist"
                value={tag}
                on:input={(event) =>
                  changeTag(index, event?.currentTarget.value || "")} />
            </div>
          {/each}
          <input type="button" on:click={addTag} value="+" />
        </div>
      </div>
    {/if}
  </div>
  {#if tags}
    <datalist id="tags-datalist">
      {#each tagsSet as tag (tag)}
        <option>{tag}</option>
      {/each}
    </datalist>
  {/if}
  <input type="submit" value="Filter" />
</form>

<style lang="sass">
  .filters
    display: table
    border-style: solid
    margin-block-start: $m-gap
    width: 100%
    @media (min-width: $m-or-more)
      width: 350px
    @media (min-width: $l-or-more)
      width: 500px

  .filter
    display: table-row
    & > *
      display: table-cell
      padding: 4px
      &:first-child
        text-align: right
        width: 1px
        white-space: nowrap
      &:last-child
        width: 100%
    input
      border-style: none
      outline: none
      overflow: visible
      padding: 0

  .tags-filter
    & > div:last-child
      display: flex
      flex-direction: column
      align-items: start
      & > div
        display: flex
        width: 100%
        align-items: baseline
        & > input:not([type=button])
          flex: 1
    input[type=button]
      border-style: none
      font-family: $monospace
      font-weight: bold
      padding: 0 $s-gap
      margin-block-end: 0

  input[type=submit]
    margin-block-start: $s-gap
</style>
