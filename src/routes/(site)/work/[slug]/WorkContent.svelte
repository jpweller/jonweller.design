<script lang="ts">
  import type { WorkContent } from '$lib/sanity/sanity';

  import SectionHeading from '$lib/components/sanity/blocks/SectionHeading.svelte';
  import Freeform from '$lib/components/sanity/blocks/Freeform.svelte';
  import AutoGrid from '$lib/components/sanity/blocks/AutoGrid.svelte';
  import CloudinaryImage from '$lib/components/sanity/blocks/CloudinaryImage.svelte';

  export let body: WorkContent[];
</script>

{#each body as block}
  {#if block._type === 'sectionHeading'}
    <SectionHeading number={block.number} title={block.title} />
  {:else if block._type === 'autoGrid'}
    <div class="section">
      <div class="section-content">
        <AutoGrid data={block} />
      </div>
    </div>
  {:else if block._type === 'freeform'}
    <div class="section">
      <div class="section-content">
        <Freeform data={block} />
      </div>
    </div>
  {:else if block._type === 'cloudinaryImage'}
    <div class="section">
      <div class="section-content">
        <CloudinaryImage data={block} />
      </div>
    </div>
  {/if}
{/each}
