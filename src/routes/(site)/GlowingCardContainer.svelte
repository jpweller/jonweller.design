<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'sm';

  let container: HTMLElement;
  let mousePosition = { x: 0, y: 0 };

  function handleMousemove(event: MouseEvent) {
    var rect = container.getBoundingClientRect();
    mousePosition = { x: event.clientX - rect.x, y: event.clientY - rect.y };
  }
</script>

<div
  class="container auto-grid auto-grid--{size}"
  bind:this={container}
  on:mousemove={handleMousemove}
  role="presentation"
  style="--mouse-x: {mousePosition.x}px; --mouse-y: {mousePosition.y}px"
>
  <slot />
</div>

<style lang="scss">
  .container {
    position: relative;
    --scale: 0;

    &:hover {
      --scale: 1;
    }
  }
</style>
