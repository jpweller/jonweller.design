<script lang="ts">
  import { browser } from '$app/environment';
  import { Header } from '$lib';
  import inView from '$lib/helpers/inView';

  const now = new Date();
  const hours = now.getHours();
  let greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';

  let scrollAmount = 0;
  const isReduced =
    browser && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (browser && !isReduced) {
    window.addEventListener('scroll', () => {
      scrollAmount = window.scrollY;
    });
  }

  let hasEntered = false;
  const handleEntered = () => {
    hasEntered = true;
  };
</script>

<div class="site-header" data-theme="dark">
  <Header />
</div>

<main>
  <header
    class="header"
    data-theme="dark"
    style="background-position: 50% calc(50% + {scrollAmount / 3}px), 50% calc(50% + {scrollAmount /
      4}px)"
  >
    <div
      class="header-content"
      style="transform: scale({scrollAmount / 3000 + 1}) translateY(-{scrollAmount / 10}px)"
    >
      <h1 class="text-heading text-2xl">{greeting},<br />I&rsquo;m Jonathon.</h1>
      <p class="text-lg">
        UX <span class="color-primary">+</span> Visual Design <span class="color-primary">+</span> Code
      </p>
      <div class="button-group">
        <a href="/contact" class="button button--primary">Get in touch</a>
        <a href="/work" class="button button--secondary">See my Work</a>
      </div>
    </div>

    <div class="trusted-by">
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
  </header>
  <section class="section">
    <div class="section-content">
      <h2 class="text-eyebrow">About</h2>
      <p
        class="text-heading text-2xl"
        class:entered={hasEntered}
        use:inView={0.8}
        on:enter={handleEntered}
      >
        I am a freelance creative that helps companies build
        <span class="color-primary letter-cascade">
          <span>b</span><span>e</span><span>a</span><span>u</span><span>t</span><span>i</span><span
            >f</span
          ><span>u</span><span>l</span>
        </span>,
        <span class="color-primary letter-cascade">
          <span>i</span><span>n</span><span>t</span><span>u</span><span>i</span><span>t</span><span
            >i</span
          ><span>v</span><span>e</span></span
        >, and
        <span class="color-primary letter-cascade">
          <span>a</span><span>c</span><span>c</span><span>e</span><span>s</span><span>s</span><span
            >i</span
          ><span>b</span><span>l</span><span>e</span>
        </span> websites.
      </p>
    </div>
  </section>
</main>

<style lang="scss">
  .site-header {
    height: 0;
  }

  .header {
    background-image: url(https://res.cloudinary.com/jpweller/image/upload/v1700258201/jpweller.com/About/fcgoxg1ns3xqskjkwatp.png),
      url(https://res.cloudinary.com/jpweller/image/upload/v1700258200/jpweller.com/About/ebk3jqrz9splxhhwdulb.jpg);
    background-size: cover;
    background-position: center;
    min-height: 95vh;
    display: flex;
    flex-direction: column;

    &-content {
      max-width: 800px;
      margin: auto auto 0 auto;
      padding: 50vh 1rem 3rem 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  .trusted-by {
    background-image: linear-gradient(transparent 0%, var(--color-gray-900) 100%);
    background-size: 100% 300%;
    padding: 1.5rem;
    text-align: center;
  }

  .logos {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    img {
      @media screen and (max-width: 600px) {
        height: 1.5rem;
      }
    }
  }

  .section {
    padding: max(5vw, 1rem);
    min-height: 80vh;
    display: flex;
    justify-content: center;

    &-content {
      max-width: 60rem;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  $wordLength: 10;
  $animationDuration: 0.5s;
  $animationInterval: 0.05s;

  @media (prefers-reduced-motion: no-preference) {
    .letter-cascade {
      text-wrap: nowrap;
      clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0%);
      display: inline-block;
      span {
        display: inline-block;
        opacity: 0;
        animation-play-state: paused;
        animation-name: fade;

        .entered & {
          animation-play-state: running;
        }

        @for $i from 1 through $wordLength {
          &:nth-of-type(#{$i}) {
            animation-delay: $animationInterval * $i;
          }
        }

        animation-duration: $animationDuration;
        animation-fill-mode: forwards;
      }
    }
  }
  @keyframes fade {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
