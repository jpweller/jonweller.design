<script lang="ts">
  import type { Work } from '$lib/sanity/sanity';
  import CloudinaryImage from '$lib/components/sanity/blocks/CloudinaryImage.svelte';

  export let work: Work;
</script>

<a class="work-card text-plain" href={`/work/${work.slug.current}`}>
  {#if work.mainImage}
    <div class="img">
      <CloudinaryImage data={work.mainImage} size="og" />
    </div>
  {/if}

  <div class="card card--sm">
    {#if work.tags}
      <ul class="row text-eyebrow text-xs color-secondary">
        {#each work.tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}

    <h3 class="text-plain text-heading text-md one-line">
      {work.title}
    </h3>
  </div>
</a>

<style lang="scss">
  .work-card {
    --img-scale: 1;
    --notch: 2rem;
    display: block;
    overflow: hidden;
    clip-path: polygon(0 0, calc(100% - var(--notch)) 0, 100% var(--notch), 100% 100%, 0 100%);
    transition:
      clip-path 0.2s ease-in-out,
      transform 0.2s ease-in-out;

    &:hover {
      --img-scale: 1.1;
      --notch: 4rem;
      transform: translateY(-0.5rem);
    }
  }

  .img {
    overflow: hidden;
  }
</style>
