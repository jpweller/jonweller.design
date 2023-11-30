<script lang="ts" context="module">
  export type Theme = 'light' | 'dark';
</script>

<script lang="ts">
  import { browser } from '$app/environment';
  import ThemeIcon from './ThemeIcon.svelte';

  import lightAnimationData from './light.json';
  import darkAnimationData from './dark.json';

  let currentTheme: Theme = 'light';

  if (browser) {
    currentTheme =
      localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : localStorage.getItem('theme') === 'light'
          ? 'light'
          : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      currentTheme =
        localStorage.getItem('theme') === 'dark'
          ? 'dark'
          : localStorage.getItem('theme') === 'light'
            ? 'light'
            : event.matches
              ? 'dark'
              : 'light';
    });
  }

  const toggleTheme = () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    browser && localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  };
</script>

<button class="button" on:click={toggleTheme}>
  <span class="sr-only">Toggle theme. Current theme: {currentTheme}.</span>
  <div class="button-icons">
    <ThemeIcon {currentTheme} theme="light" animationData={lightAnimationData} />
    <ThemeIcon {currentTheme} theme="dark" animationData={darkAnimationData} />
  </div>
</button>

<style lang="scss">
  .button {
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    transition: 0.2s;

    &-icons {
      display: grid;
      grid-template: 2rem / 2rem;
    }
  }
</style>
