<script lang="ts">
  import type { PageData } from './$types';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import WorkContent from './WorkContent.svelte';
  import SeeAllWork from '../SeeAllWork.svelte';

  export let data: PageData;

  const { title, tags, description, body, mainImage } = data;

  const image = mainImage?.secure_url
    .replace('upload/', 'upload/c_fill,w_1200,h_630/')
    .replace('.svg', '.png');
</script>

<PageMeta {title} {description} {image} />

<main class="page-layout">
  <header class="section auto-grid">
    <div class="stack">
      <h1 class="text-heading text-2xl">{title}</h1>
      {#if tags}
        <ul class="row text-eyebrow color-secondary">
          {#each tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      {/if}
    </div>
    <p class="text-lg">{description}</p>
  </header>

  <WorkContent {body} />
</main>

<SeeAllWork />
