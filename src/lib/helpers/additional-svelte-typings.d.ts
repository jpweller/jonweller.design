declare namespace svelteHTML {
  // enhance attributes
  interface HTMLAttributes<T> {
    // for inView.ts
    'on:enter'?: (event: any) => any;
  }
}
