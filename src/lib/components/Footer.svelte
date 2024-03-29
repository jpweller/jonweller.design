<script lang="ts">
  import Swoosh from '$lib/components/Swoosh.svelte';
  import ThemeToggleButton from '$lib/components/theme-toggle/ThemeToggleButton.svelte';
  import ParticleButton from './ParticleButton.svelte';
  import { page } from '$app/stores';

  let path: string;
  let ctaTitle = 'Let’s work together';
  let ctaText = 'Contact me';
  let href = '/contact';

  function getPath(currentPath: string) {
    path = currentPath;
    if (path === '/contact') {
      ctaTitle = 'See my work';
      ctaText = 'All work';
      href = '/work';
    } else {
      ctaTitle = 'Let’s work together';
      ctaText = 'Get in touch';
      href = '/contact';
    }
  }

  $: getPath($page.url.pathname);
</script>

<section class="cta page-layout section section--lg" data-theme="dark">
  <div class="stack gap-2">
    <svg width="98" height="6" viewBox="0 0 98 6" fill="currentColor" role="none">
      <rect width="45" height="6" />
      <rect x="51" width="29" height="6" />
      <rect x="86" width="2" height="6" />
      <rect x="91" width="2" height="6" />
      <rect x="96" width="2" height="6" />
    </svg>
    <h3 class="text-heading text-3xl">{ctaTitle}</h3>
    <div class="row">
      <ParticleButton {href}>{ctaText}</ParticleButton>
    </div>
  </div>
</section>

<footer class="footer page-layout section section--xl">
  <div class="header">
    <Swoosh />
    <ThemeToggleButton />
  </div>
  <p class="text-heading text-2xl">
    Jonathon Weller is a designer and software developer based in New York City and Chincoteague,
    Virginia.
  </p>
  <section class="stack">
    <h3 class="text-heading text-lg">Let's connect:</h3>
    <div class="row text-lg gap-2">
      <a class="link" target="_blank" href="https://www.instagram.com/jonweller.design/"
        >Instagram</a
      >
      <a class="link" target="_blank" href="https://github.com/jpweller">GitHub</a>
      <a class="link" target="_blank" href="https://www.linkedin.com/in/jonathon-weller-29054146/"
        >LinkedIn</a
      >
    </div>
  </section>
  <div class="row text-sm">
    <p>© Copyright JP Weller Designs, LLC</p>
    <a class="link" href="/colophon">Colophon</a>
  </div>
</footer>

<style lang="scss">
  .cta {
    position: relative;
    background: linear-gradient(var(--color-accent), var(--color-accent-dark));
  }

  .footer {
    background: linear-gradient(transparent, var(--color-bg-primary));
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }
</style>
