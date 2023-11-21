<script lang="ts">
  import Services from './Services.svelte';

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
      4}px); background-size: auto {100 + scrollAmount / 40}% , cover;"
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
      <div style="transform: scale({scrollAmount / -3000 + 1}) translateY(-{scrollAmount / 20}px)">
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
  </header>
  <section class="section">
    <svg
      viewBox="0 0 1280 194"
      fill="none"
      class="wave"
      style="transform: translateY(-50%) scaleY({scrollAmount / 400}) translateY(-50%);"
    >
      <path
        fill="var(--color-bg-secondary)"
        d="M0 0s148.434 194 640 194c491.57 0 640-194 640-194v194H0V0Z"
      />
    </svg>
    <div
      class="section-content"
      class:entered={hasEntered}
      use:inView={0.8}
      on:enter={handleEntered}
    >
      <p class="text-heading text-2xl">
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
  <Services></Services>
  <section class="section">
    <div class="section-content">
      <p class="text-heading text-xl">
        I&rsquo;m a designer and developer with over a decade of experience. I&rsquo;ve worked with
        companies of all sizes, from startups to Fortune 500s, to create beautiful, intuitive, and
        accessible websites.
      </p>
      <p class="text-heading text-xl">
        I&rsquo;m currently available for freelance projects. If you&rsquo;d like to work together,
        please get in touch.
      </p>
      <a href="/contact" class="button button--primary">Get in touch</a>
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
    background-repeat: no-repeat;
    min-height: 95vh;
    min-height: -webkit-fill-available;
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
      gap: 1.25rem;
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

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: scaleY(0);
  }

  .section {
    // min-height: 80vh;
    // display: flex;
    // align-items: center;
    position: relative;
    box-shadow: 0 -1px 0 var(--color-bg-secondary);
    background-color: var(--color-bg-secondary);

    &-content {
      padding: 6rem 0;
      // display: flex;
      // flex-direction: column;
      // gap: 2rem;
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
