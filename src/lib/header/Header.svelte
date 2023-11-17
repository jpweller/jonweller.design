<script lang="ts">
  import Swoosh from './Swoosh.svelte';
  import ThemeToggleButton from './ThemeToggleButton.svelte';
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  import animationData from './menu-icon.json';

  let menuToggle: HTMLElement;
  let hamburgerAnimation: any;

  onMount(() => {
    hamburgerAnimation = lottie.loadAnimation({
      container: menuToggle,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        title: 'Menu',
        className: 'hamburger'
      }
    });
  });

  let menuOpen = false;
  const toggleMenuOpen = () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      hamburgerAnimation.setDirection(1);
      hamburgerAnimation.play();
    } else {
      hamburgerAnimation.setDirection(-1);
      hamburgerAnimation.play();
    }
  };
</script>

<header class="header">
  <h1 class="logo">
    <a href="/">
      <span class="sr-only">Jonathon Weller</span>
      <Swoosh />
    </a>
  </h1>

  <div class="right-side">
    <nav id="main-menu" aria-labelledby="main-menu-toggle" class="nav" class:open={menuOpen}>
      <a class="nav-item active" href="/">About</a>
      <a class="nav-item" href="/work">Work</a>
      <a class="nav-item" href="/contact">Contact</a>
    </nav>
    <ThemeToggleButton />
    <button
      id="main-menu-toggle"
      class="menu-toggle"
      bind:this={menuToggle}
      on:click={toggleMenuOpen}
      aria-haspopup="true"
      aria-controls="main-menu"
    ></button>
  </div>
</header>

<slot />

<style lang="scss">
  $mobile-breakpoint: 30rem;

  .header {
    display: flex;
    padding: 1.5rem;

    @media screen and (max-width: $mobile-breakpoint) {
      padding: 1rem;
    }
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .right-side {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2px;

    @media screen and (max-width: $mobile-breakpoint) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-bg);
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: 0.2s;
      z-index: 2;
      font-size: 2rem;
      gap: 2rem;

      &.open {
        opacity: 1;
        pointer-events: all;
      }
    }

    &-item {
      display: inline-block;
      color: var(--color-text);
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        bottom: -4px;
        left: 0;
        right: 0;
        background-color: var(--color-text);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s;
      }

      &:hover:after,
      &.active:after {
        transform: scaleX(1);
      }
    }
  }

  .menu-toggle {
    display: none;

    @media screen and (max-width: $mobile-breakpoint) {
      display: block;
      z-index: 3;
    }
  }

  :global(.hamburger path) {
    fill: currentColor !important;
  }
</style>
