<script lang="ts">
  import { clickOutside } from '../helpers/clickOutside';
  import ColorModeIcon from './ColorModeIcon.svelte';

  import autoAnimaitonData from './auto.json';
  import lightAnimaitonData from './light.json';
  import darkAnimaitonData from './dark.json';

  const colorModes = ['auto', 'light', 'dark'] as const;
  type ColorMode = (typeof colorModes)[number];
  let currentColorMode: ColorMode = 'auto';
  let colorModeMenuOpen = false;
  const colorModeIcons: { [key in ColorMode]: { icon: string; name: string } } = {
    auto: {
      icon: 'M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0ZM8 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13ZM16 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8ZM13.657 2.343a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0ZM4.464 11.536a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0ZM13.657 13.657a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707ZM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708ZM7 4.14a.384.384 0 0 1 .04.428 3.604 3.604 0 0 0-.44 1.73c0 2.01 1.64 3.638 3.66 3.638.263 0 .52-.027.767-.08a.394.394 0 0 1 .405.158.367.367 0 0 1-.016.447A4.174 4.174 0 0 1 8.172 12C5.867 12 4 10.143 4 7.855A4.146 4.146 0 0 1 6.562 4.03.376.376 0 0 1 7 4.14Z',
      name: 'System (auto)'
    },
    dark: {
      icon: 'M14.137.099a.145.145 0 0 0-.274 0l-.258.774a1.156 1.156 0 0 1-.732.732l-.774.258a.145.145 0 0 0 0 .274l.774.258c.346.115.617.386.732.732l.258.774c.044.132.23.132.274 0l.258-.774c.115-.346.386-.617.732-.732l.774-.258a.145.145 0 0 0 0-.274l-.774-.258a1.156 1.156 0 0 1-.732-.732L14.137.1ZM6 .279a.768.768 0 0 1 .08.857 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278Zm4.794 2.87a.217.217 0 0 1 .412 0l.387 1.161c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162Z',
      name: 'Dark'
    },
    light: {
      icon: 'M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0ZM8 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13ZM16 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8ZM13.657 2.343a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0ZM4.464 11.536a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0ZM13.657 13.657a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707ZM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708Z',
      name: 'Light'
    }
  };

  const toggleColorModeMenuOpen = () => {
    colorModeMenuOpen = !colorModeMenuOpen;
  };

  const handleClickOutside = () => {
    colorModeMenuOpen = false;
  };

  const setColorMode = (mode: ColorMode) => {
    currentColorMode = mode;
    colorModeMenuOpen = false;
    document.documentElement.setAttribute('data-color-mode', mode);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      colorModeMenuOpen = false;
    }
  };
</script>

<svelte:window on:keydown={handleKeyPress} />

<div class="menu" class:open={colorModeMenuOpen} use:clickOutside={handleClickOutside}>
  <button class="menu-button" on:click={toggleColorModeMenuOpen}>
    <span class="sr-only">Toggle color mode. Current:</span>
    <div class="menu-button-icons">
      <ColorModeIcon current={currentColorMode} color="auto" animationData={autoAnimaitonData} />
      <ColorModeIcon current={currentColorMode} color="light" animationData={lightAnimaitonData} />
      <ColorModeIcon current={currentColorMode} color="dark" animationData={darkAnimaitonData} />
    </div>
  </button>

  <div class="menu-dropdown">
    <h3 class="text-eyebrow color-secondary">Theme</h3>
    {#each colorModes as mode}
      <button class="menu-option" on:click={() => setColorMode(mode)}>
        <svg width="24" height="24" viewBox="0 0 16 16">
          <path fill="currentColor" d={colorModeIcons[mode].icon} />
        </svg>
        {colorModeIcons[mode].name}
        {#if currentColorMode === mode}
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.8536 3.64645C14.0488 3.84171 14.0488 4.15829 13.8536 4.35355L6.85355 11.3536C6.75979 11.4473 6.63261 11.5 6.5 11.5C6.36739 11.5 6.24021 11.4473 6.14645 11.3536L2.64645 7.85355C2.45118 7.65829 2.45118 7.34171 2.64645 7.14645C2.84171 6.95118 3.15829 6.95118 3.35355 7.14645L6.5 10.2929L13.1464 3.64645C13.3417 3.45118 13.6583 3.45118 13.8536 3.64645Z"
              fill="currentColor"
            />
          </svg>
        {/if}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .menu {
    display: flex;
    position: relative;

    &-button {
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

      &:hover {
        transform: scale(1.1);
      }

      &-icons {
        position: relative;
        height: 2rem;
        width: 2rem;
      }
    }

    &-dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 100%;
      background-color: var(--color-bg-secondary);
      visibility: hidden;
      padding: 0.5rem;
      border-radius: 0.5rem;
      gap: 0.5rem;
      align-items: flex-start;
      transition: 0.2s;
      opacity: 0;

      .open & {
        visibility: visible;
        opacity: 1;
        transform: translateY(4px);
      }
    }

    &-option {
      background: none;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      padding: 1rem;
      text-wrap: nowrap;
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 0.25rem;

      &:hover {
        background-color: var(--color-bg-tertiary);
      }
    }
  }
</style>
