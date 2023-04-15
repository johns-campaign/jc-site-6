<script lang="ts">
  export let paragraphs: string[]
</script>

<div class="quote">
  {#each paragraphs as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

<style lang="sass">
p:first-of-type::before
  content: "‘"

p:last-of-type::after
  content: "’"
</style>
