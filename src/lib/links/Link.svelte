<script lang="ts">
  export let href: string
  export let same = true
  let class_ = ""
  export {class_ as class}
</script>

{#if same}
  <a class={class_} {href}><slot>{href}</slot></a>
{:else}
  <a class={class_} {href} target="_blank" rel="noopener noreferrer"
    ><slot>{href}</slot></a>
{/if}
