export const IO = (
  item: Element,
  options?: IntersectionObserverInit
): Promise<void> => {
  return new Promise((resolve) => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve();
        }
      });
    }, options);
    observer.observe(item);
  });
};

