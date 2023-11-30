<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../../main.scss';
</script>

<Header />
<slot />
<Footer />
