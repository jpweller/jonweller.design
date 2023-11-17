<script lang="ts">
  import { browser } from '$app/environment';
  import ThemeIcon from './ThemeIcon.svelte';

  import lightAnimaitonData from './light.json';
  import darkAnimaitonData from './dark.json';

  type Theme = 'light' | 'dark';

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
    <ThemeIcon current={currentTheme} color="light" animationData={lightAnimaitonData} />
    <ThemeIcon current={currentTheme} color="dark" animationData={darkAnimaitonData} />
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
      position: relative;
      height: 2rem;
      width: 2rem;
    }
  }
</style>
