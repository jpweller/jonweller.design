<script lang="ts">
  import ParticleButton from '$lib/components/ParticleButton.svelte';

  import { browser } from '$app/environment';

  const now = new Date();
  const hours = now.getHours();
  const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';

  let scrollAmount = 0;
  const isReduced =
    browser && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (browser && !isReduced) {
    window.addEventListener('scroll', () => {
      scrollAmount = window.scrollY;
    });
  }
</script>

<header class="clip" data-theme="dark" style="--scroll-amount: {scrollAmount};">
  <div class="header">
    <div class="header-content">
      <h1 class="text-heading text-2xl">{greeting},<br />I&rsquo;m Jonathon.</h1>
      <p class="row">
        <span>UI/UX</span>
        <span class="color-accent">+</span>
        <span>Web dev</span>
        <span class="color-accent">+</span>
        <span>Branding</span>
      </p>
      <div class="button-group">
        <ParticleButton href="/contact">Let's work together</ParticleButton>
        <a href="/work" class="button button--secondary">See my work</a>
      </div>
    </div>

    <div class="trusted-by">
      <div class="trusted-by-contents">
        <h3 class="text-eyebrow">Trusted by</h3>
        <div class="logos">
          <img
            src="https://res.cloudinary.com/jpweller/image/upload/v1700247732/jpweller.com/Logos/j6nhkeug0b31sdvqwdo0.svg"
            alt="DISQO"
          />
          <img
            src="https://res.cloudinary.com/jpweller/image/upload/v1700247733/jpweller.com/Logos/v6nmugl2wsjzfhacbo3t.svg"
            alt="Raconteur"
          />
          <img
            src="https://res.cloudinary.com/jpweller/image/upload/v1700247733/jpweller.com/Logos/oartu8z72sysi7xvutgy.svg"
            alt="Reserve"
          />
          <img
            src="https://res.cloudinary.com/jpweller/image/upload/v1700247733/jpweller.com/Logos/rxsvtun6hdu89nyv8mqg.svg"
            alt="Etto"
          />
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  .clip {
    opacity: calc(1.1 - var(--scroll-amount) / 600);
  }

  .header {
    --hover-opacity: 0;
    background: url(https://res.cloudinary.com/jpweller/image/upload/v1700258201/jpweller.com/About/fcgoxg1ns3xqskjkwatp.png),
      url(https://res.cloudinary.com/jpweller/image/upload/v1700258200/jpweller.com/About/ebk3jqrz9splxhhwdulb.jpg);
    background-position:
      50% calc(50% + 1px * var(--scroll-amount) / 3),
      50% calc(50% + 1px * var(--scroll-amount) / 4);
    background-size:
      auto calc(100% + 1px * var(--scroll-amount) / 6),
      cover;
    background-repeat: no-repeat;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    position: relative;
    clip-path: ellipse(
      calc(200vmax - (100vmax * var(--scroll-amount) / 500)) 100% at 50%
        calc(-5vh * var(--scroll-amount) / 800)
    );

    &-content {
      max-width: 800px;
      margin: auto auto 0 auto;
      padding: 50vh 1rem 3rem 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.25rem;
      transform: scale(calc(var(--scroll-amount) / 3000 + 1))
        translateY(calc(-1px * var(--scroll-amount) / 10));
    }
  }

  .trusted-by {
    background-image: linear-gradient(transparent 0%, var(--color-gray-900) 100%);
    background-size: 100% 300%;
    padding: 1.5rem;
    text-align: center;

    &-contents {
      transform: scale(calc(var(--scroll-amount) / -3000 + 1))
        translateY(calc(-1px * var(--scroll-amount) / 20));

      @media prefers-reduced-motion {
        transform: none;
      }
    }
  }

  .logos {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    img {
      width: auto;

      @media screen and (max-width: 600px) {
        height: 1.5rem;
      }
    }
  }
</style>
