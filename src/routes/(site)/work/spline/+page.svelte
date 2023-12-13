<script lang="ts">
  import type { PageData } from './$types';
  import PageMeta from '$lib/components/PageMeta.svelte';

  export let data: PageData;
  const { title, tags, description, mainImage } = data;

  const image = mainImage?.secure_url
    .replace('upload/', 'upload/c_fill,w_1200,h_630/')
    .replace('.svg', '.png');
</script>

<PageMeta {title} {description} {image} />

<main>
  <header class="section">
    <div class="auto-grid section-content">
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
    </div>
  </header>

  <section class="section">
    <div class="section-content">
      <spline-viewer url="https://prod.spline.design/9NWhX1bzPmz6YXco/scene.splinecode"
      ></spline-viewer>

      <spline-viewer url="https://prod.spline.design/eJR11PbYggrz3YLD/scene.splinecode"
      ></spline-viewer>
    </div>
  </section>
</main>

<section class="section">
  <div class="section-content">
    <div class="row center">
      <a href="/work" class="button button--secondary">See all work</a>
    </div>
  </div>
</section>
