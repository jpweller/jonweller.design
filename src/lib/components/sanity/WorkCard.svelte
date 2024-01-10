<script lang="ts">
  import type { Work } from '$lib/sanity/sanity';
  import CloudinaryImage from '$lib/components/sanity/blocks/CloudinaryImage.svelte';

  export let work: Work;
</script>

<a class="card card--link text-plain" href={`/work/${work.slug.current}`}>
  {#if work.mainImage}
    <div class="img">
      <div class="scale">
        <CloudinaryImage data={work.mainImage} size="og" />
      </div>
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
  @media screen and (min-width: 40rem) {
    .card {
      --img-scale: 1;
      &:hover {
        --img-scale: 1.1;
      }
    }

    .img {
      overflow: hidden;
    }

    .scale {
      transform: scale(var(--img-scale));
      transition: transform 0.2s ease-in-out;
    }
  }
</style>
