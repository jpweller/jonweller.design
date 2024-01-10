<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';
  import WorkCard from '$lib/components/sanity/WorkCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<PageMeta title="Work" />

<main class="page-layout section">
  <h1 class="text-heading text-2xl">Work</h1>
  {#if data.works.length}
    <div class="section auto-grid gap-1">
      {#each data.works as work}
        <WorkCard {work} />
      {/each}
    </div>
  {:else}
    <p>Coming soon</p>
  {/if}
</main>
