<script lang="ts">
  import type { CloudinaryImage } from '$lib/sanity/sanity';

  type ImageSizes = 'original' | 'og';

  export let data: CloudinaryImage;
  export let size: ImageSizes = 'original';

  let src = data.secure_url;

  size === 'og' && src.replace('upload/', 'upload/c_fill,w_1200,h_630/');

  const isGif = src.split('.').pop() === 'gif';
  size === 'original' && !isGif && src.replace('upload/', 'upload/c_scale,w_1200/');

  const alt = data.context && data.context.alt ? data.context.alt : 'Work of Jonathon Weller.';
</script>

<img class:og-img={size === 'og'} {src} {alt} />

<style lang="scss">
  .og-img {
    display: block;
    object-fit: cover;
    aspect-ratio: 120 / 63;
    transform: scale(var(--img-scale));
    transition: transform 0.2s ease-in-out;
  }
</style>
