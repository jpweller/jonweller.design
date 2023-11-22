<script lang="ts">
  export let title: string;
</script>

<section class="section">
  <div class="section-content">
    <h2 class="text-eyebrow">{title}</h2>
    <slot />
  </div>
</section>

<style lang="scss">
  .section {
    @media screen and (max-width: 60rem) {
      text-align: center;
    }

    background-color: var(--color-bg-secondary);
  }
</style>
