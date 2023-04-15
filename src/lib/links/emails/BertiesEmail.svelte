<script lang="ts">
  import Email from "./Email.svelte"

  const address = "bertie@wheen.online"
</script>

<Email {address}><slot>{address}</slot></Email>
