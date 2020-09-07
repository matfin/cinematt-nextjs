import { IntersectionObserverMockProps } from 'models/interfaces';
import { fireEvent } from '@testing-library/react';
import { Direction } from 'models/types';

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

export const swipe = (direction: Direction): void => {
  switch (direction) {
    case Direction.Right: {
      fireEvent.touchStart(window, {
        changedTouches: [
          {
            screenX: 10,
            screenY: 20,
          },
        ],
      });
      fireEvent.touchEnd(window, {
        changedTouches: [
          {
            screenX: 400,
            screenY: 80,
          },
        ],
      });
      break;
    }
    case Direction.Left: {
      fireEvent.touchStart(window, {
        changedTouches: [
          {
            screenX: 400,
            screenY: 80,
          },
        ],
      });

      fireEvent.touchEnd(window, {
        changedTouches: [
          {
            screenX: 10,
            screenY: 20,
          },
        ],
      });
      break;
    }
    case Direction.Down: {
      fireEvent.touchStart(window, {
        changedTouches: [
          {
            screenX: 20,
            screenY: 20,
          },
        ],
      });

      fireEvent.touchEnd(window, {
        changedTouches: [
          {
            screenX: 30,
            screenY: 500,
          },
        ],
      });
      break;
    }
    case Direction.Up: {
      fireEvent.touchStart(window, {
        changedTouches: [
          {
            screenX: 20,
            screenY: 500,
          },
        ],
      });

      fireEvent.touchEnd(window, {
        changedTouches: [
          {
            screenX: 30,
            screenY: 20,
          },
        ],
      });
      break;
    }
  }
};
