<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import lottie from 'lottie-web';

  import Swoosh from './Swoosh.svelte';
  import ThemeToggleButton from './theme-toggle/ThemeToggleButton.svelte';
  import animationData from './theme-toggle/menu-icon.json';

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

  const closeMenu = () => {
    menuOpen = false;
    hamburgerAnimation.setDirection(-1);
    hamburgerAnimation.play();
  };

  let path: string;

  function getPath(currentPath: string) {
    path = currentPath;
  }

  $: getPath($page.url.pathname);
</script>

<div class="home-fix">
  <header class="header">
    <h1 class="logo">
      <Swoosh />
    </h1>
    <div class="right-side" class:open={menuOpen}>
      <nav id="main-menu" aria-labelledby="main-menu-toggle" class="nav">
        <a on:click={closeMenu} class="link" class:active={path === '/'} href="/">About</a>
        <a on:click={closeMenu} class="link" class:active={path === '/work'} href="/work">Work</a>
        <a on:click={closeMenu} class="link" class:active={path === '/contact'} href="/contact"
          >Contact</a
        >
      </nav>
      <div class="theme-toggle">
        <ThemeToggleButton />
      </div>
      <button
        id="main-menu-toggle"
        class="menu-toggle"
        bind:this={menuToggle}
        on:click={toggleMenuOpen}
        aria-haspopup="true"
        aria-controls="main-menu"
      >
        <div class="sr-only">Menu</div>
      </button>
    </div>
  </header>
</div>

<style lang="scss">
  .home-fix {
    --og-color-text-primary: var(--color-text-primary);
    --header-color: var(--color-text-primary);

    &:has(+ .home) {
      position: relative;
      z-index: 2;
      height: 0;
      --header-color: var(--color-gray-0);
    }
  }

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
    --color-text-primary: var(--header-color);
  }

  .right-side {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    --color-text-primary: var(--header-color);
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2px;
    --color-text-primary: var(--header-color);

    @media screen and (max-width: $mobile-breakpoint) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-bg-primary);
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: 0.2s;
      z-index: 2;
      font-size: 2rem;
      gap: 2rem;
      --color-text-primary: var(--og-color-text);

      .open & {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  .link {
    color: var(--color-text-primary);
  }

  .menu-toggle {
    display: none;
    height: 2rem;
    width: 2rem;

    .right-side:not(.open) & {
      color: var(--header-color);
    }

    @media screen and (max-width: $mobile-breakpoint) {
      display: block;
      z-index: 3;
    }
  }

  :global(.hamburger path) {
    fill: currentColor !important;
  }

  @media screen and (max-width: $mobile-breakpoint) {
    :global(body:has(.right-side.open)) {
      overflow: hidden;
      position: fixed;
    }
  }
</style>
