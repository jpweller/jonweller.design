<script lang="ts">
  import type { Freeform } from '$lib/sanity/sanity';

  // https://www.sanity.io/plugins/portabletext-svelte
  import { PortableText } from '@portabletext/svelte';

  export let data: Freeform;

  const components = {};
</script>

<div class="text {data.maxWidth ? data.maxWidth : ''}">
  <PortableText value={data.content} {components} />
</div>
