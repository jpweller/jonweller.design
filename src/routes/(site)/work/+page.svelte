<script lang="ts">
  import WorkCard from '$lib/components/sanity/WorkCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="section">
  <div class="section-content">
    <h1 class="text-heading text-2xl">Work</h1>
    {#if data.works.length}
      {#each data.works as work}
        <WorkCard {work} />
      {/each}
    {:else}
      <p>Coming soon</p>
    {/if}
  </div>
</div>
