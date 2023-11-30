<script lang="ts">
  export let title = '';
  export let description =
    'I’m a product designer and developer who helps founders and startups build products that make the world a better place.';
  export let image = '';

  const ogTitle = title ? `${title} | Jon Weller Design` : 'Jon Weller Design';

  const ogImage =
    image ||
    'https://res.cloudinary.com/jpweller/image/upload/v1701354603/jpweller.com/Site%20Assets/psv2ftugjnocm1hpgrv4.png';
</script>

<svelte:head>
  <title>{ogTitle}</title>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@jpwellr" />
  <meta name="twitter:creator" content="@jpwellr" />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <slot />
</svelte:head>
