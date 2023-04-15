<script>
  import {page} from "$app/stores"

  $: href = $page.url.toString()
</script>

<a {href}><slot /></a>
