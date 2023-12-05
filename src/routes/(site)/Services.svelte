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

  let container: HTMLElement;
  let mousePosition = { x: 0, y: 0 };

  function handleMousemove(event: MouseEvent) {
    var rect = container.getBoundingClientRect();
    mousePosition = { x: event.clientX - rect.x, y: event.clientY - rect.y };
  }
</script>

<Section title="Services">
  <div
    class="container auto-grid auto-grid--sm"
    bind:this={container}
    on:mousemove={handleMousemove}
    role="presentation"
    style="--mouse-x: {mousePosition.x}px; --mouse-y: {mousePosition.y}px"
  >
    <div class="card stack gap-2">
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
    </div>
    <div class="card stack gap-2">
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
    </div>
    <div class="card stack gap-2">
      <div role="img" aria-labelledby="branding" class="img" bind:this={brandingContainer}></div>
      <h3 id="branding" class="text-heading text-xl">Branding</h3>
      <ul class="stack color-secondary">
        <li>Logo & identity</li>
        <li>Brand books & style guides</li>
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

  .container {
    position: relative;
    --scale: 0;

    &:hover {
      --scale: 1;
    }

    &:has(.card:hover) .card::after {
      opacity: 1;
    }
  }

  .card {
    padding: 2rem;
    background-color: var(--color-bg-primary);
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%);

    @media (min-width: 40rem) {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 20rem;
        width: 20rem;
        background-color: var(--color-accent);
        transform: translate(calc(-50% + var(--mouse-x)), calc(-50% + var(--mouse-y)))
          scale(var(--scale));
        opacity: 0;
        pointer-events: none;
        transition:
          transform 0.2s ease-out,
          opacity 0.2s ease-out;
        border-radius: 50%;
        filter: blur(200px);
        z-index: -1;

        @media prefers-reduced-motion {
          display: none;
        }
      }
    }
  }
</style>
