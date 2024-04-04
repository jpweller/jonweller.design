<script lang="ts">
  import type { CloudinaryImage } from '$lib/sanity/sanity';

  type ImageSizes = 'original' | 'og';

  export let data: CloudinaryImage;
  export let size: ImageSizes = 'original';

  let src = data.secure_url;

  function updateSrcSize(newSize: string) {
    src = src.replace('upload/', `upload/${newSize}/`);
  }

  size === 'og' && updateSrcSize('c_fill,w_600');

  const isGif = src.split('.').pop() === 'gif';
  size === 'original' && !isGif && updateSrcSize('c_scale,w_1200');

  const alt = data.context && data.context.alt ? data.context.alt : 'Work of Jonathon Weller.';
</script>

<img class:og-img={size === 'og'} {src} {alt} />

<style lang="scss">
  .og-img {
    display: block;
    object-fit: cover;
    aspect-ratio: 120 / 63;
  }
</style>
