<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';

  export let animationData: any;
  export let color: string;
  export let current: string;

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

  $: if (current === color) {
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
    position: absolute;
    height: 2rem;
    width: 2rem;
  }

  :global(.theme-icon path) {
    fill: currentColor;
  }
</style>
