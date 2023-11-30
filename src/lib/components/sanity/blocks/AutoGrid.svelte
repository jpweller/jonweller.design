<script lang="ts">
  import type { AutoGrid } from '$lib/sanity/sanity';
  import Freeform from './Freeform.svelte';

  export let data: AutoGrid;
</script>

<div class="auto-grid {data.size ? data.size : ''}">
  {#each data.items as item}
    {#if item._type === 'freeform' && 'content' in item}
      <Freeform data={item} />
    {:else if item._type === 'cloudinaryImage'}
      <div>
        <img src={item.image.url} alt={item.alt} />
        <code>
          {JSON.stringify(item, null, 2)}
        </code>
      </div>
    {:else}
      <code>
        {JSON.stringify(item, null, 2)}
      </code>
    {/if}
  {/each}
</div>
