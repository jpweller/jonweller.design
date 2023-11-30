<script lang="ts">
  import inView from '$lib/helpers/inView';
  import Section from './Section.svelte';

  let hasEntered = false;
  const handleEntered = () => {
    hasEntered = true;
  };
</script>

<Section title="About">
  <div class:entered={hasEntered} use:inView={0.8} on:enter={handleEntered}>
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
      </span> digital products and brands.
    </p>
  </div>
</Section>

<style lang="scss">
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
