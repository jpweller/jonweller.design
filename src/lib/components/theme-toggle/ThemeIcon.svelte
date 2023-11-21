<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  import type { Theme } from './ThemeToggleButton.svelte';

  export let animationData: any;
  export let theme: string;
  export let currentTheme: Theme;

  let active: boolean;
  let container: HTMLElement;
  let anim: any;

  onMount(() => {
    anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        className: 'theme-icon'
      }
    });
  });

  $: if (currentTheme === theme) {
    anim!! && anim.playSegments([0, 60], true);
    active = true;
  } else {
    active && anim!! && anim.playSegments([60, 120], true);
    active = false;
  }
</script>

<div class="theme-icon" bind:this={container}></div>

<style lang="scss">
  .theme-icon {
    grid-area: 1 / 1 / 2 / 2;
  }

  :global(.theme-icon path) {
    fill: currentColor;
  }
</style>
