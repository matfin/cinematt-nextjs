import { useEffect } from 'react';

const useIntersectionObserver = (ref: React.MutableRefObject<HTMLElement>, cb: () => void): void => {
  useEffect((): (() => void) => {
    if (!('IntersectionObserver' in window)) {
      cb();
      return;
    }

    const { current } = ref;
    const observer = new IntersectionObserver(([{ intersectionRatio }]: IntersectionObserverEntry[]): void => {
      if (intersectionRatio > 0) {
        cb();
      }
    });

    observer.observe(current);

    return (): void => {
      observer.unobserve(current);
      observer.disconnect();
    };
  }, [ref]);
};

export default useIntersectionObserver;
