<script lang="ts">
  export let level: number
</script>

{#if level <= 1}
  <h1 class="heading"><slot /></h1>
{:else if level === 2}
  <h2 class="heading"><slot /></h2>
{:else if level === 3}
  <h3 class="heading"><slot /></h3>
{:else if level === 4}
  <h4 class="heading"><slot /></h4>
{:else if level === 5}
  <h5 class="heading"><slot /></h5>
{:else}
  <h6 class="heading"><slot /></h6>
{/if}
