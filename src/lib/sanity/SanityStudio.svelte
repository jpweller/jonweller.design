<script lang="ts">
  import { renderStudio, type Config } from 'sanity';
  import { onMount } from 'svelte';

  export let config: Config;

  let studioEl: HTMLElement;

  onMount(() => {
    if (studioEl) {
      renderStudio(studioEl, config);
    }
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="robots" content="noindex" />
  <meta name="referrer" content="same-origin" />
</svelte:head>

<div class="studio" bind:this={studioEl} />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  :global(.studio > div:first-child) {
    height: 100vh;
  }
</style>
