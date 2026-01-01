declare module 'splitting' {
  interface SplittingOptions {
    target?: Element | Element[] | NodeList | HTMLElement | string;
    by?: 'chars' | 'words' | 'lines' | string;
    key?: string | null;
  }

  interface SplittingResult {
    el: HTMLElement;
    words?: HTMLElement[];
    chars?: HTMLElement[];
    lines?: HTMLElement[];
  }

  function Splitting(
    options?: SplittingOptions
  ): SplittingResult[];

  export default Splitting;
}

