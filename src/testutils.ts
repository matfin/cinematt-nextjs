import { IntersectionObserverMockProps } from 'models/interfaces';

export const intersectionObserverMock = ({
  disconnect,
  observe,
  observerEntries,
  unobserve,
}: IntersectionObserverMockProps): void => {
  class IntersectionObserver {
    constructor(cb: (observerEntries: IntersectionObserverEntry[]) => void) {
      cb(observerEntries);
    }
    disconnect = disconnect;
    observe = observe;
    unobserve = unobserve;
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
};
