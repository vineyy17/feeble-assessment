import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export default function scroll(): Lenis {
  const lenis = new Lenis({
    wrapper: window,
    lerp: 0.25,
    smoothWheel: true,
    easing: (t) => 1 - Math.pow(1 - t, 3), 
    duration: 0.8,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    touchMultiplier: 1.5,
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

