<script lang="ts">
  import Swoosh from '$lib/components/Swoosh.svelte';
  import ThemeToggleButton from '$lib/components/theme-toggle/ThemeToggleButton.svelte';
</script>

<footer class="bg-accent color-primary-inverse">
  <div class="section">
    <div class="section-content">
      <div class="header">
        <Swoosh />
        <ThemeToggleButton />
      </div>
      <div class="stack">
        <a href="/work" class="button button--inverse text-heading text-2xl">See my work</a>
        <a href="/contact" class="button button--inverse text-heading text-2xl">Work with me</a>
      </div>
      <p class="text-heading text-2xl">
        Jonathon Weller is a designer and software developer based in Chincoteague, Virginia and in
        New York City.
      </p>
      <section class="stack">
        <h3 class="text-heading text-lg">Let's connect:</h3>
        <div class="row text-lg gap-2">
          <a class="link" target="_blank" href="https://www.instagram.com/jpweller/">Instagram</a>
          <a class="link" target="_blank" href="https://github.com/jpweller">GitHub</a>
          <a class="link" target="_blank" href="https://www.linkedin.com/in/jpweller/">LinkedIn</a>
        </div>
      </section>
      <div class="row text-sm">
        <p>© Copyright JP Weller Designs, LLC</p>
        <a class="link" href="/colophon">Colophon</a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .section-content {
    align-items: normal;
    gap: max(15vh, 2rem);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    --color-text-primary: var(--color-text-primary-inverse);
  }
</style>
