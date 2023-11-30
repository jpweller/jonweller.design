declare namespace svelteHTML {
  // enhance attributes
  interface HTMLAttributes<T> {
    // for inView.ts
    'on:enter'?: (event: any) => any;
  }
}

declare module '$env/static/public' {
  export const PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
  export const PUBLIC_SANITY_STUDIO_DATASET: string;
}
