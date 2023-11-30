<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';
  import Hero from './Hero.svelte';
  import About from './About.svelte';
  import Services from './Services.svelte';
  import WhyMe from './WhyMe.svelte';
  import Section from './Section.svelte';
</script>

<PageMeta />

<main class="home">
  <Hero />
  <About />
  <Services />
  <WhyMe />
  <Section title="Who do I work with?">
    <div class="text auto-grid">
      <p class="text-heading text-2xl">
        I’ve worked with founders, startups, and agencies. No matter the company shape or size, I
        love working with people who want to build something that makes the world a better place and
        enjoy the process of working on it together.
      </p>
    </div>
  </Section>
</main>
