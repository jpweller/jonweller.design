<script lang="ts">
  import WorkContent from './WorkContent.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const { title, tags, description, body } = data;
</script>

<header class="section">
  <div class="auto-grid section-content">
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
  </div>
</header>

<WorkContent {body} />
