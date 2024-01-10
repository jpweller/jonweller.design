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
      <AutoGrid data={block} />
    </div>
  {:else if block._type === 'freeform'}
    <div class="section page-layout-item-text">
      <Freeform data={block} />
    </div>
  {:else if block._type === 'cloudinary.asset'}
    <div class="section">
      <CloudinaryImage data={block} />
    </div>
  {/if}
{/each}

<SectionHeading number={0} title="End" />
