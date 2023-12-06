<script lang="ts">
  export let title: string;
</script>

<section class="section">
  <div class="section-content">
    <h2 class="text-eyebrow color-secondary">{title}</h2>
    <slot />
  </div>
</section>
