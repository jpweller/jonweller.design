<script lang="ts">
  let swooshRunning = false;

  const runSwoosh = () => {
    swooshRunning = true;
    setTimeout(() => {
      swooshRunning = false;
    }, 500);
  };
</script>

<a href="/">
  <span class="sr-only">Jonathon Weller</span>
  <svg class="logo" viewBox="0 0 1120 192" role="img" on:mouseenter={runSwoosh}>
    <path
      class="line"
      class:running={swooshRunning}
      d="m1096,32c-96,0-96,128-192,128s-96-128-192-128c-96,0-96,128-192,128s-96-128-192-128c-96,0-96,128-192,128S40,32-56,32c-96,0-96,128-192,128s-96-128-192-128"
    />
  </svg>
</a>

<style lang="scss">
  .logo {
    display: block;
    height: 1.25rem;

    @media screen and (min-width: 30rem) {
      height: 1.5rem;
    }
  }

  .line {
    fill: none;
    stroke: var(--color-text-primary);
    stroke-miterlimit: 10;
    stroke-width: 64px;
    stroke-dasharray: 1330, 1330;
    transition: 0s;

    &.running {
      stroke-dashoffset: -482;
      transform: translate(384px, 0);
      transition: 0.5s;
    }
  }
</style>
