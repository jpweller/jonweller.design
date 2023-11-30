<script lang="ts">
  // https://www.sanity.io/plugins/portabletext-svelte
  import { PortableText } from '@portabletext/svelte';

  import type { WorkContent } from '$lib/sanity/sanity';
  import SectionHeading from '$lib/components/sectionHeading.svelte';

  export let body: WorkContent[];

  const components = {};
</script>

{#each body as block}
  {#if block._type === 'sectionHeading'}
    <SectionHeading number={block.number} title={block.title} />
  {:else if block._type === 'autoGrid'}
    <div class="auto-grid {block.size ? block.size : ''}">
      {#each block.items as item}
        <div class="stack">
          <PortableText value={item.content} {components} />
        </div>
      {/each}
    </div>
  {:else if block._type === 'freeform'}
    <div class="text {block.maxWidth ? block.maxWidth : ''}">
      {#each block.content as item}
        <PortableText value={item} {components} />
      {/each}
    </div>
  {/if}
{/each}
