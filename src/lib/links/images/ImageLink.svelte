<script lang="ts">
  export let dir = ""
  export let file: string

  $: href = `/images/${dir ? `${dir}/` : ""}${file}`
</script>

<a {href}><slot>{file}</slot></a>
