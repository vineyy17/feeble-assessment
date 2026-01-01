import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export default function scroll(): Lenis {
  const lenis = new Lenis({
    wrapper: window,
    lerp: 0.07,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  });

  lenisInstance = lenis;

  function raf(time: number): void {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

