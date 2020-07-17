import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import useIntersectionObserver from './useIntersectionObserver';
import { intersectionObserverMock } from '../testutils';

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
