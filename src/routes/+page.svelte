<script lang="ts">
  import { Header } from '$lib';
  import Hero from './Hero.svelte';
  import About from './About.svelte';
  import Services from './Services.svelte';
  import WhyMe from './WhyMe.svelte';
</script>

<main class="home">
  <Hero />
  <About />
  <Services />
  <WhyMe />
</main>

<style lang="scss">
  .site-header {
    height: 0;
  }
</style>
