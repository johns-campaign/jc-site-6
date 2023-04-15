<script lang="ts">
  export let text = ""
  export let tags: string[] = []

  const param = (key: string, value: string) => value && `${key}=${value}`

  $: textParam = param("text", text)
  $: tagsParam = param("tags", tags.join(","))
  $: queryParams = [textParam, tagsParam].filter((param) => param).join("&")

  $: href = `/blog${queryParams ? `?${queryParams}` : ""}`
</script>

<a {href}><slot>Blog</slot></a>
