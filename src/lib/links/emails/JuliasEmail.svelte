<script lang="ts">
  import Email from "./Email.svelte"

  const address = "julia@johnscampaign.org.uk"
</script>

<Email {address}><slot>{address}</slot></Email>
