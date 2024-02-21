<script lang="ts">
  import 'https://unpkg.com/@splinetool/viewer@0.9.519/build/spline-viewer.js';

  import SeeAllWork from '../SeeAllWork.svelte';

  import type { PageData } from './$types';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import SectionHeading from '$lib/components/sanity/blocks/SectionHeading.svelte';

  export let data: PageData;
  const { title, tags, description, mainImage } = data;

  const image = mainImage?.secure_url
    .replace('upload/', 'upload/c_fill,w_1200,h_630/')
    .replace('.svg', '.png');
</script>

<PageMeta {title} {description} {image} />

<main class="page-layout section">
  <header class="auto-grid">
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

  <section class="section">
    <spline-viewer url="https://prod.spline.design/9NWhX1bzPmz6YXco/scene.splinecode"
    ></spline-viewer>

    <spline-viewer url="https://prod.spline.design/eJR11PbYggrz3YLD/scene.splinecode"
    ></spline-viewer>
  </section>

  <SectionHeading number={0} title="End" />
</main>

<SeeAllWork />
