<script lang="ts">
  export let href: string;
</script>

<div class="particle-button">
  <a {href} class="button button--primary">
    <slot />
  </a>
  <div class="particles" role="none">
    {#each Array(60) as _, i}
      <div
        class="particle"
        style="
        --offset: {100 * Math.random()}%;
        --x: {10 * Math.random() - 5}rem;
        --size: {Math.random() * 2 + 1}px;
        --opacity: {Math.random() * 0.5 + 0.5};
        --rotate-duration: {(1 - i / 100) * (Math.random() * 10 + 30) + 40}s;
        --flicker-duration: {Math.random() * 3 + 1}s;
      "
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .particle-button {
    position: relative;
    display: flex;
    z-index: 1;
  }

  .particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    display: none;

    .button:hover + & {
      display: block;
    }

    @media screen and (max-width: 40rem) {
      scale: 1;
      opacity: 1;
    }

    @media (prefers-reduced-motion) {
      display: none;
    }
  }

  .particle {
    position: absolute;
    left: var(--offset);
    top: 50%;
    animation: rotate var(--rotate-duration) linear infinite;
    animation-delay: -120s;
    transform-origin: 50% 0;

    &::after {
      content: '';
      display: block;
      width: var(--size);
      height: var(--size);
      background-color: var(--color-bg-primary-inverse);
      box-shadow: 0 0 2px var(--color-bg-primary-inverse);
      border-radius: 50%;
      animation: flicker var(--flicker-duration) linear infinite alternate;
      animation-delay: -10s;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translateX(var(--x));
    }
    100% {
      transform: rotate(360deg) translateX(var(--x));
    }
  }

  @keyframes flicker {
    0% {
      opacity: 0;
    }
    10% {
      opacity: var(--opacity);
    }
    20% {
      opacity: 0;
    }
  }
</style>
