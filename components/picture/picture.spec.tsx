import React from 'react';
import 'jest-styled-components';
import { act, fireEvent, render } from '@testing-library/react';
import { intersectionObserverMock } from 'testutils';
import Picture, { altText, Props } from './picture';

describe('Picture tests', () => {
  const defaultProps: Props = {
    publicId: '123',
    version: '456',
  };

  it('renders the component', (): void => {
    expect(render(<Picture {...defaultProps} />)).toBeTruthy();
    expect(render(<Picture {...defaultProps} isDetail />)).toBeTruthy();
  });

  it('does not initially load the image when lazy loading is enabled', (): void => {
    intersectionObserverMock({
      disconnect: jest.fn(),
      observe: jest.fn(),
      observerEntries: [{ intersectionRatio: 0 } as IntersectionObserverEntry],
      unobserve: jest.fn(),
    });

    const { container } = render(<Picture {...defaultProps} lazyLoad={true} />);
    const image = container.querySelector('img');
    const sources = container.querySelectorAll('source');

    expect(image.src).toEqual('');
    expect(sources[0].srcset).toEqual('');
    expect(sources[1].srcset).toEqual('');
  });

  it('loads the image when lazy loading is not enabled', async (): Promise<void> => {
    const { container } = render(<Picture {...defaultProps} />);
    const image = container.querySelector('img');
    const sources = container.querySelectorAll('source');
    const expectedSizes: number[] = [960, 960, 1024, 1024, 680, 680, 576, 576, 448, 448, 724, 724, 560, 560, 320, 320];

    act((): void => {
      fireEvent.load(image);
    });

    expect(image.src).toContain('v456/123.jpg');
    expect(sources).toHaveLength(16);
    expect(image).toHaveStyleRule('opacity', '1');

    sources.forEach((source: HTMLSourceElement, index: number): void => {
      expect(source.srcset).toContain(`w_${expectedSizes[index]}`);
      expect(source.srcset).toContain('v456/123');
    });
  });

  it('returns the correct alt text', () => {
    expect(altText()).toEqual('missing title');
    expect(altText('invalid')).toEqual('missing title');
    expect(altText('album/descriptive-image-text')).toEqual('descriptive image text');
  });
});
