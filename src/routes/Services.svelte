<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  import Section from './Section.svelte';
  import brandingAnimationData from '$lib/home-assets/branding.json';
  import uxAnimationData from '$lib/home-assets/ux.json';
  import devAnimationData from '$lib/home-assets/dev.json';

  let brandingContainer: HTMLElement;
  let uxContainer: HTMLElement;
  let devContainer: HTMLElement;

  onMount(() => {
    lottie.loadAnimation({
      container: brandingContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: brandingAnimationData
    });

    lottie.loadAnimation({
      container: uxContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: uxAnimationData
    });

    lottie.loadAnimation({
      container: devContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: devAnimationData
    });
  });
</script>

<Section title="Services">
  <div class="auto-grid auto-grid--sm">
    <div class="stack gap-2">
      <div role="img" aria-labelledby="ux-design" class="img" bind:this={uxContainer}></div>
      <h3 id="ux-design" class="text-heading text-xl">UX Design</h3>
      <ul class="stack color-secondary">
        <li>User Experience Design</li>
        <li>Marketing Sites</li>
        <li>New User Funnels</li>
        <li>Enterprise Dashboards</li>
        <li>Data Visualization</li>
        <li>Design Systems</li>
        <li>Lottie Animations</li>
      </ul>
    </div>
    <div class="stack gap-2">
      <div role="img" aria-labelledby="web-dev" class="img" bind:this={devContainer}></div>
      <h3 id="web-dev" class="text-heading text-xl">Web Dev</h3>
      <ul class="stack color-secondary">
        <li>Webflow</li>
        <li>Design Systems (React + Web components)</li>
        <li>Svelte</li>
        <li>Web Animations</li>
      </ul>
    </div>
    <div class="stack gap-2">
      <div role="img" aria-labelledby="branding" class="img" bind:this={brandingContainer}></div>
      <h3 id="branding" class="text-heading text-xl">Branding</h3>
      <ul class="stack color-secondary">
        <li>Logo & Identity</li>
        <li>Brand Books & Style Guides</li>
        <li>Illustration</li>
      </ul>
    </div>
  </div>
</Section>

<style lang="scss">
  .img {
    height: 5rem;
    width: 6.25rem;
  }
</style>
