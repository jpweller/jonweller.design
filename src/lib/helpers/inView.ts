/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 */

export default function inView(node: HTMLElement, threshold = 0) {
  let observer: IntersectionObserver;

  const handleIntersect = (e: IntersectionObserverEntry[]) => {
    const v = e[0].isIntersecting ? 'enter' : 'exit';
    node.dispatchEvent(new CustomEvent(v));
  };

  const setObserver = (threshold: number) => {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(handleIntersect, { root: null, threshold });
    observer.observe(node);
  };

  setObserver(threshold);

  return {
    update(threshold: number) {
      setObserver(threshold);
    },

    destroy() {
      if (observer) observer.disconnect();
    }
  };
}
