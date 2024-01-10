<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  import Section from './Section.svelte';
  import brandingAnimationData from '$lib/home-assets/branding.json';
  import uxAnimationData from '$lib/home-assets/ux.json';
  import devAnimationData from '$lib/home-assets/dev.json';

  import GlowingCardContainer from './GlowingCardContainer.svelte';
  import GlowingCard from './GlowingCard.svelte';

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
  <GlowingCardContainer>
    <GlowingCard>
      <div role="img" aria-labelledby="ux-design" class="img" bind:this={uxContainer}></div>
      <h3 id="ux-design" class="text-heading text-xl">UX design</h3>
      <ul class="stack color-secondary">
        <li>User experience design</li>
        <li>Marketing sites</li>
        <li>New user funnels</li>
        <li>Enterprise dashboards</li>
        <li>Data visualization</li>
        <li>Design systems</li>
        <li>Lottie animations</li>
      </ul>
    </GlowingCard>
    <GlowingCard>
      <div role="img" aria-labelledby="web-dev" class="img" bind:this={devContainer}></div>
      <h3 id="web-dev" class="text-heading text-xl">Web dev</h3>
      <ul class="stack color-secondary">
        <li>Webflow</li>
        <li>Svelte</li>
        <li>Sanity</li>
        <li>Cloudinary</li>
        <li>Design systems (React + Web components)</li>
        <li>Web animations</li>
      </ul>
    </GlowingCard>
    <GlowingCard>
      <div role="img" aria-labelledby="branding" class="img" bind:this={brandingContainer}></div>
      <h3 id="branding" class="text-heading text-xl">Branding</h3>
      <ul class="stack color-secondary">
        <li>Logo & identity</li>
        <li>Brand books & style guides</li>
        <li>Illustration</li>
      </ul>
    </GlowingCard>
  </GlowingCardContainer>
</Section>

<style lang="scss">
  .img {
    height: 5rem;
    width: 6.25rem;
  }
</style>
