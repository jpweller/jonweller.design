<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../main.scss';
</script>

<Header />
<main class="section">
  <div class="section-content center">
    <div class="text text-center">
      <h1 class="status">{$page.status}</h1>
      {#if $page.error}
        <p class="text-xl">{$page.error.message}</p>
      {/if}
    </div>
  </div>
</main>
<Footer />

<style lang="scss">
  .status {
    font-size: max(7em, 20vw);
  }
</style>
