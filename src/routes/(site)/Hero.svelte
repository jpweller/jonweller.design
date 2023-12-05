<script lang="ts">
  import { browser } from '$app/environment';

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
</script>

<header class="header" data-theme="dark" style="--scroll-amount: {scrollAmount};">
  <div class="header-content">
    <h1 class="text-heading text-2xl">{greeting},<br />I&rsquo;m Jonathon.</h1>
    <ul class="services row center text-eyebrow text-xs">
      <li class="service"><a class="service-button" href="/work">UI/UX</a></li>
      <li class="service"><a class="service-button" href="/work">Web dev</a></li>
      <li class="service"><a class="service-button" href="/work">Branding</a></li>
      <li class="service"><a class="service-button" href="/work">Illustration</a></li>
    </ul>
    <div class="button-group">
      <a href="/contact" class="button button--primary">Get in touch</a>
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
</header>
<div class="wave-container" style="--scroll-amount: {scrollAmount};">
  <svg viewBox="0 0 1280 194" fill="none" class="wave">
    <path
      fill="var(--color-bg-secondary)"
      d="M0 0s148.434 194 640 194c491.57 0 640-194 640-194v194H0V0Z"
    />
  </svg>
</div>

<style lang="scss">
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
    background-position:
      50% calc(50% + 1px * var(--scroll-amount) / 3),
      50% calc(50% + 1px * var(--scroll-amount) / 4);
    background-size:
      auto calc(100% + 1px * var(--scroll-amount) / 6),
      cover;

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

  $desktop-services-breakpoint: 60rem;

  .services {
    @media screen and (min-width: $desktop-services-breakpoint) {
      position: fixed;
      inset: 0;
      z-index: -1;
    }
  }

  .service {
    @media screen and (min-width: $desktop-services-breakpoint) {
      position: absolute;
      animation: wobble 2s ease-in-out infinite;

      @media prefers-reduced-motion {
        animation: none;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0.5rem;
        outline: 1px solid var(--color-accent);
        opacity: 0;
        transform: translate(-50%, -50%);
        z-index: -1;

        animation: pulse-delay 4s ease-in-out infinite;

        @media prefers-reduced-motion {
          animation: none;
        }
      }

      &:nth-child(1) {
        top: 25%;
        left: -20%;
        animation-delay: -200ms;
      }

      &:nth-child(2) {
        top: 56%;
        left: 0%;
        animation-delay: -400ms;
      }

      &:nth-child(3) {
        top: 30%;
        left: 124%;
        animation-delay: -600ms;
      }

      &:nth-child(4) {
        top: 49%;
        left: 119%;
        animation-delay: -800ms;
      }
    }
  }

  .service-button {
    display: inline-block;
    padding: 0.55rem 0.75rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 0.5rem;
    transition: background-color 0.3s ease-in-out;
    color: var(--color-gray-0);
    text-decoration: none;
    position: relative;

    @media screen and (min-width: $desktop-services-breakpoint) {
      transform: translate(-50%, -50%);

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0.5rem;
        outline: 1px solid var(--color-accent);
        opacity: 0;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);

        &::after {
          animation: pulse 0.5s ease-in-out 1;

          @media prefers-reduced-motion {
            animation: none;
          }
        }
      }
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      outline-offset: 1rem;
      opacity: 0;
    }
  }

  @keyframes pulse-delay {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      outline-offset: 1rem;
      opacity: 0;
    }
  }

  @keyframes wobble {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
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

  .wave-container {
    position: relative;
    height: 1px;
    background-color: var(--color-bg-secondary);
    box-shadow: 0 -1px 0 var(--color-bg-secondary);
  }

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: translateY(-50%) scaleY(calc(var(--scroll-amount) / 400 + 0.1)) translateY(-50%);

    @media prefers-reduced-motion {
      display: none;
    }
  }
</style>
