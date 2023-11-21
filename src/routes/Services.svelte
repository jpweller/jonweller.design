<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
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

<section class="section">
  <div class="section-content">
    <h2 class="text-eyebrow">Services</h2>
    <div class="services">
      <div class="service">
        <div class="img" bind:this={brandingContainer}></div>
        <h3 class="text-heading text-xl">Branding</h3>
        <ul class="list">
          <li>Logo & Identity</li>
          <li>Brand Books & Style Guides</li>
          <li>Illustration</li>
        </ul>
      </div>

      <div class="service">
        <div class="img" bind:this={uxContainer}></div>
        <h3 class="text-heading text-xl">UX Design</h3>
        <ul class="list">
          <li>User Experience Design</li>
          <li>Marketing Sites</li>
          <li>New User Funnels</li>
          <li>Enterprise Dashboards</li>
          <li>Data Visualization</li>
          <li>Design Systems</li>
          <li>Lottie Animations</li>
        </ul>
      </div>

      <div class="service">
        <div class="img" bind:this={devContainer}></div>
        <h3 class="text-heading text-xl">Front End Dev</h3>
        <ul class="list">
          <li>Webflow</li>
          <li>Design Systems (React + Web components)</li>
          <li>Svelte</li>
          <li>Web Animations</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .section {
    @media screen and (max-width: 60rem) {
      text-align: center;
    }
  }

  .service {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1 1 0px;

    @media screen and (max-width: 60rem) {
      align-items: center;
    }
  }

  .services {
    display: flex;
    gap: 6rem;

    @media screen and (max-width: 60rem) {
      gap: 3rem;
      flex-direction: column;
      align-items: center;
    }
  }

  .img {
    height: 5rem;
    width: 6.25rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
