<script lang="ts">
  import type { Work } from '$lib/sanity/sanity';

  export let work: Work;
</script>

<div class="stack">
  {#if work.mainImage}
    Get the image
  {/if}

  <h3 class="text-heading text-xl">
    <a class="text-plain" href={`/work/${work.slug.current}`}>
      {work.title}
    </a>
  </h3>

  {#if work.tags}
    <ul class="row text-eyebrow">
      {#each work.tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  {/if}

  <div>
    <a class="link" href={`/work/${work.slug.current}`}> View project →</a>
  </div>
</div>
