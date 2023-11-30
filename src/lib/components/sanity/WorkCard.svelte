<script lang="ts">
  import type { Work } from '$lib/sanity/sanity';
  import CloudinaryImage from '$lib/components/sanity/blocks/CloudinaryImage.svelte';

  export let work: Work;
</script>

<div class="stack">
  {#if work.mainImage}
    <a class="img" href={`/work/${work.slug.current}`}>
      <div class="hover">
        <CloudinaryImage data={work.mainImage} size="og" />
      </div>
    </a>
  {/if}

  <h3 class="text-heading text-xl">
    <a class="text-plain" href={`/work/${work.slug.current}`}>
      {work.title}
    </a>
  </h3>

  {#if work.tags}
    <ul class="row text-eyebrow color-secondary">
      {#each work.tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  {/if}

  <div>
    <a class="link" href={`/work/${work.slug.current}`}> View project →</a>
  </div>
</div>

<style lang="scss">
  .img {
    display: block;
    overflow: hidden;
  }

  .hover {
    transition:
      transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
</style>
