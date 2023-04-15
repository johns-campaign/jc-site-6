<script lang="ts">
  import Email from "./Email.svelte"

  const address = "nicci.gerrard@icloud.com"
</script>

<Email {address}><slot>{address}</slot></Email>
