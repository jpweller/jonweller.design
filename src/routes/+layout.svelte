<script lang="ts">
  import Swoosh from '$lib/components/Swoosh.svelte';
  import '../main.scss';
</script>

<slot />

<footer>
  <div class="footer section">
    <div class="section-content">
      <div class="footer-content-left">
        <Swoosh />
        <div class="footer-content-left-text">
          <p class="text-xl">
            JP Weller is a freelance designer and developer based in New York City and Chincoteague,
            Virginia.
          </p>
        </div>
      </div>
      <div class="footer-content-right">
        <div class="footer-content-right-links">
          <a href="https://twitter.com/jpweller">Twitter</a>
          <a href="https://github.com/jpweller">GitHub</a>
          <a href="https://www.linkedin.com/in/jpweller/">LinkedIn</a>
          <a href="https://www.instagram.com/jpweller/">Instagram</a>
        </div>
        <div class="footer-content-right-email">
          <a href="mailto:jon@jonweller.design">Email</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 2rem 0;
  }

  .footer-content-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
    width: 100%;
    max-width: 48rem;
  }

  .footer-content-left-text {
    width: 100%;
    max-width: 400px;
  }

  .footer-content-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 48rem;
  }

  .footer-content-right-links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
  }

  .footer-content-right-email {
    width: 100%;
    max-width: 200px;
  }

  .footer-content-right-links a {
    color: var(--color-white);
    text-decoration: none;
    font-size: 1.25rem;
  }

  .footer-content-right-email a {
    color: var(--color-white);
    text-decoration: none;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }

    .footer-content-left {
      margin-bottom: 2rem;
    }

    .footer-content-right {
      width: 100%;
      max-width: 400px;
    }

    .footer-content-right-links {
      justify-content: space-between;
      width: 100%;
      max-width: 400px;
    }

    .footer-content-right-email {
      width: 100%;
      max-width: 200px;
    }
  }
</style>
