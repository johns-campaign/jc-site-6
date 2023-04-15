<script lang="ts">
  export let dir: string
  export let file: string

  $: href = `/docs/${dir}/${file}`
</script>

<a {href}><slot>{file}</slot></a>
