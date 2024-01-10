<div class="card stack padding-2">
  <slot />
</div>

<style lang="scss">
  .card {
    @media (min-width: 40rem) {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 20rem;
        width: 20rem;
        background-color: var(--color-accent);
        transform: translate(calc(-50% + var(--mouse-x)), calc(-50% + var(--mouse-y)))
          scale(var(--scale));
        opacity: 0;
        pointer-events: none;
        transition:
          transform 1s ease-out,
          opacity 1s ease-out;
        border-radius: 50%;
        filter: blur(200px);
        z-index: -1;

        @media prefers-reduced-motion {
          display: none;
        }
      }
    }
  }

  :global(.container:has(.card:hover) .card::after) {
    opacity: 1;

    transition:
      transform 0.2s ease-out,
      opacity 0.2s ease-out;
  }
</style>
