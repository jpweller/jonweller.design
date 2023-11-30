<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';

  let email = '';
  let emailTag: HTMLAnchorElement;
  const message = `Adding extra content so I don't get spammed. This will get replaced in a second.`;

  setTimeout(() => {
    email = 'jon@jonweller.design';
    emailTag.innerHTML = email;
  }, 1000);
</script>

<PageMeta title="Contact" />

<h1 class="text-heading text-2xl">Contact</h1>
<p>
  Please reach out to my email at
  <a href="mailto:{email}" bind:this={emailTag}
    >jo<span class="sr-only">
      {message}
    </span>n@jonwell<span class="sr-only">
      {message}
    </span>er.design</a
  >.
</p>
