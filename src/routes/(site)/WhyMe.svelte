<script lang="ts">
  import Section from './Section.svelte';
  import inView from '$lib/helpers/inView';
  import GlowingCard from './GlowingCard.svelte';
  import GlowingCardContainer from './GlowingCardContainer.svelte';

  let hasEntered = false;
  const handleEntered = () => {
    hasEntered = true;
  };
</script>

<Section title="Why choose me?">
  <h3 class="text-heading text-2xl">Some of the things that set me apart:</h3>
  <GlowingCardContainer size="lg">
    <GlowingCard>
      <h4 class="text-heading text-lg">Craftsmanship</h4>
      <p class="color-secondary">
        I take pride in my craftsmanship and pay attention to every detail. With a careful, hands-on
        approach, I make sure my clients' brands and products are elevated, whether it's through
        subtle animations or intricate design elements.
      </p>
    </GlowingCard>
    <GlowingCard>
      <h4 class="text-heading text-lg">Decade-long expertise</h4>
      <p class="color-secondary">
        With over ten years of experience in the industry, I bring a wealth of knowledge to the
        table. Benefit from a seasoned perspective that understands the evolving trends and nuances
        of design and development.
      </p>
    </GlowingCard>
    <GlowingCard>
      <h4 class="text-heading text-lg">Built to scale</h4>
      <p class="color-secondary">
        I don't just create one-off designs; I build systems that grow with your brand. Whether it's
        a branding identity system or component library, I create innovative design systems that
        provide a scalable foundation, ensuring consistency and coherence across all touch points.
      </p>
    </GlowingCard>
    <GlowingCard>
      <h4 class="text-heading text-lg">User-centric approach</h4>
      <p class="color-secondary">
        My design approach revolves around the people using the products I am creating. I prioritize
        creating interfaces that are not just visually appealing but are also intuitive and
        accessible, ensuring a seamless and enjoyable experience for anyone interacting with your
        brand and products online.
      </p>
    </GlowingCard>
  </GlowingCardContainer>
</Section>
