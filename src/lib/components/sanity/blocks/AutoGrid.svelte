<script lang="ts">
  import type { AutoGrid } from '$lib/sanity/sanity';
  import CloudinaryImage from './CloudinaryImage.svelte';
  import Freeform from './Freeform.svelte';

  export let data: AutoGrid;
</script>

<div class="auto-grid {data.size ? data.size : ''}">
  {#each data.items as item}
    {#if item._type === 'freeform' && 'content' in item}
      <Freeform data={item} />
    {:else if item._type === 'cloudinary.asset'}
      <CloudinaryImage data={item} />
    {:else}
      <code>
        {JSON.stringify(item, null, 2)}
      </code>
    {/if}
  {/each}
</div>
