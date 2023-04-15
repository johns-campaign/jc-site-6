<script lang="ts">
  export let dir = ""
  export let file: string
  let class_ = ""
  export {class_ as class}

  $: src = `/images/${dir ? `${dir}/` : ""}${file}`
</script>

<img {src} class={class_} />

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
