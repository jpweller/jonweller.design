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

  let hasEntered = false;
  const handleEntered = () => {
    hasEntered = true;
  };
</script>

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
<div class="wave-container">
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
    transform: scaleY(0);
  }
</style>
