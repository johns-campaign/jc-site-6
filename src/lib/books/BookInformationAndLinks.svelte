<script lang="ts">
  import {formatTimestampAsDate} from "$lib/format"
  import ExternalLink from "$lib/links/ExternalLink.svelte"
  import type Book from "$lib/types/Book"

  export let book: Book
</script>

<ul class="right-of-float">
  <li>
    Published {formatTimestampAsDate(book.timestamp)}
  </li>
  {#if book.information}
    {#each book.information as info}
      <li>
        {@html info}
      </li>
    {/each}
  {/if}
  {#if book.links}
    {#each book.links as link}
      <li>
        <ExternalLink href={link.href}>{@html link.text}</ExternalLink>
      </li>
    {/each}
  {/if}
</ul>
