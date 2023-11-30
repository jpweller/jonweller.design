<script lang="ts">
  import WorkContent from './WorkContent.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const { title, tags, description, mainImage, body } = data;
</script>

<header class="auto-grid">
  <div class="stack">
    <h1 class="text-heading text-2xl">{title}</h1>
    {#if tags}
      <ul class="row text-eyebrow">
        {#each tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}
  </div>
  <p class="text-lg">{description}</p>
</header>

{#if mainImage}
  img
{:else}
  <div class="post__cover--none" />
{/if}

<div class="text">
  <WorkContent {body} />
</div>
