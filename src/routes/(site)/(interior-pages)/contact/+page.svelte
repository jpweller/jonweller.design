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
<div class="text max-width-lg">
  <p class="text-xl">
    Whether you want to work together or just want to talk shop, please reach out! I’m currently
    available for freelance projects and full-time work.
  </p>
  <p class="row gap-2 text-xl">
    <svg role="presentation" class="icon" viewBox="0 0 16 16" fill="none">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8Z"
        clip-rule="evenodd"
      />
    </svg>
    <strong
      ><a class="link" href="mailto:{email}" bind:this={emailTag}
        >jo<span class="sr-only">
          {message}
        </span>n@jonwell<span class="sr-only">
          {message}
        </span>er.design</a
      ></strong
    >
  </p>
</div>

<style lang="scss">
  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
