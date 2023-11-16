export function clickOutside(element: HTMLElement, callback: () => void) {
  const handleClick = (event: Event) => {
    if (element && !element.contains(event.target as Node)) {
      callback();
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}
