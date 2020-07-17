import { useEffect } from 'react';

const useIntersectionObserver = (ref: React.MutableRefObject<any>, cb: () => void): void => {
  useEffect((): () => void => {
    if(!('IntersectionObserver' in window)) {
      cb();
      return;
    }

    const { current } = ref;
    const observer = new IntersectionObserver((
      [{ intersectionRatio }]: IntersectionObserverEntry[]
    ): void => {
      if(intersectionRatio > 0) {
        observer.unobserve(current);
        cb();
      }
    });

    observer.observe(current);

    return (): void => {
      observer.unobserve(current);
    };
  }, [ref]);
};

export default useIntersectionObserver;
