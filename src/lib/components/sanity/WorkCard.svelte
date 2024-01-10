<script lang="ts">
  import type { Work } from '$lib/sanity/sanity';
  import CloudinaryImage from '$lib/components/sanity/blocks/CloudinaryImage.svelte';

  export let work: Work;
</script>

<a class="card card--link text-plain" href={`/work/${work.slug.current}`}>
  {#if work.mainImage}
    <div class="img">
      <CloudinaryImage data={work.mainImage} size="og" />
    </div>
  {/if}

  <div class="padding-1">
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
  .card {
    --img-scale: 1;
    &:hover {
      --img-scale: 1.1;
    }
  }

  .img {
    overflow: hidden;
  }
</style>
