<script lang="ts">
  import type { CloudinaryImage } from '$lib/sanity/sanity';

  export let data: CloudinaryImage;
</script>

<img src={data.image.url} alt={data.alt} />
