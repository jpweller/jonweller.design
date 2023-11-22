<script lang="ts">
  import { Header } from '$lib';
  import Hero from './Hero.svelte';
  import About from './About.svelte';
  import Services from './Services.svelte';
  import WhyMe from './WhyMe.svelte';
</script>

<div class="site-header" data-theme="dark">
  <Header />
</div>

<main>
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
