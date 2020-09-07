import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import useIntersectionObserver from './useIntersectionObserver';
import useSwipe from './useSwipe';
import { intersectionObserverMock, swipe } from 'testutils';
import { Direction } from 'models/types';

describe('userIntersectionObserver tests', () => {
  const spyDisconnect = jest.fn();
  const spyObserve = jest.fn();
  const spyUnobserve = jest.fn();
  const spyCb = jest.fn();

  const TestComponent = (): JSX.Element => {
    const ref = useRef(null);

    useIntersectionObserver(ref, spyCb);

    return <div ref={ref}>Test</div>;
  };

  beforeEach((): void => {
    spyObserve.mockReset();
    spyUnobserve.mockReset();
  });

  it('should observe an element when initialised', () => {
    const observerEntries = [{ intersectionRatio: 0 } as IntersectionObserverEntry];
    intersectionObserverMock({ disconnect: jest.fn(), observe: spyObserve, observerEntries, unobserve: spyUnobserve });
    render(<TestComponent />);

    expect(spyObserve).toHaveBeenCalled();
    expect(spyCb).not.toHaveBeenCalled();
  });

  it('should unobserve and execute the callback given a positive intersection ratio', async (): Promise<void> => {
    const observerEntries = [{ intersectionRatio: 1 } as IntersectionObserverEntry];

    intersectionObserverMock({
      disconnect: spyDisconnect,
      observe: spyObserve,
      observerEntries,
      unobserve: spyUnobserve,
    });
    const wrapper = render(<TestComponent />);

    expect(spyObserve).toHaveBeenCalled();
    expect(spyCb).toHaveBeenCalled();
    expect(spyUnobserve).not.toHaveBeenCalled();

    wrapper.unmount();
    expect(spyUnobserve).toHaveBeenCalled();
    expect(spyDisconnect).toHaveBeenCalled();
  });
});

describe('useSwipe tests', () => {
  const spyCb = jest.fn();
  const TestComponent = (): JSX.Element => {
    useSwipe(spyCb);

    return <div />;
  };

  beforeEach((): void => {
    spyCb.mockReset();
  });

  it('should swipe right', async (): Promise<void> => {
    render(<TestComponent />);
    swipe(Direction.Right);

    expect(spyCb).toHaveBeenCalledWith(Direction.Right);
  });

  it('should swipe left', async (): Promise<void> => {
    render(<TestComponent />);
    swipe(Direction.Left);

    expect(spyCb).toHaveBeenCalledWith(Direction.Left);
  });

  it('should swipe down', async (): Promise<void> => {
    render(<TestComponent />);
    swipe(Direction.Down);

    expect(spyCb).toHaveBeenCalledWith(Direction.Down);
  });

  it('should swipe up', async (): Promise<void> => {
    render(<TestComponent />);
    swipe(Direction.Up);

    expect(spyCb).toHaveBeenCalledWith(Direction.Up);
  });

  it('not act on smaller swipes', async (): Promise<void> => {
    render(<TestComponent />);

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
          screenY: 20,
        },
      ],
    });

    expect(spyCb).not.toHaveBeenCalled();
  });
});
