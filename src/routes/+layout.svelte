<script lang="ts">
  import Swoosh from '$lib/components/Swoosh.svelte';
  import ThemeToggleButton from '$lib/components/theme-toggle/ThemeToggleButton.svelte';
  import '../main.scss';
</script>

<slot />

<footer>
  <div class="section">
    <div class="section-content">
      <div class="header">
        <Swoosh />
        <ThemeToggleButton />
      </div>
      <div class="mega-buttons">
        <a href="/work" class="button button--inverse text-heading text-2xl">See my work</a>
        <a href="/contact" class="button button--inverse text-heading text-2xl">Contact</a>
      </div>
      <p class="text-heading text-2xl">
        Jonathon Weller is a designer and software developer based in Chincoteague, Virginia and in
        New York City.
      </p>
      <div class="links">
        <a target="_blank" href="https://github.com/jpweller">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/jpweller/">LinkedIn</a>
        <a target="_blank" href="https://www.instagram.com/jpweller/">Instagram</a>
        <a target="_blank" href="mailto:jon@jonweller.design">Email</a>
      </div>
      <div class="links text-sm">
        <p>© Copyright JP Weller Designs, LLC</p>
        <a href="/colophone">Colophone</a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .section {
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
  }

  .section-content {
    align-items: normal;
    gap: max(15vh, 2rem);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }

  .mega-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      color: var(--color-text-inverse);
    }
  }
</style>
