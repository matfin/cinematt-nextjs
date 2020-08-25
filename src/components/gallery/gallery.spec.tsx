import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Photo } from 'models/interfaces';
import { Orientation } from 'models/types';
import Gallery, { Props } from './gallery';

describe('Gallery tests', (): void => {
  const defaultProps: Props = {
    photos: [],
  };

  it('should render the component', (): void => {
    expect(render(<Gallery {...defaultProps} />)).toBeTruthy();
  });

  it('renders some photos', (): void => {
    const photos: Photo[] = [
      {
        name: 'test-one',
        album: 'test',
        format: 'jpg',
        created_at: new Date('1982-04-26'),
        height: 320,
        orientation: Orientation.Landscape,
        public_id: 'id-123',
        version: 'v-123',
        width: 240,
        tags: [],
      },
      {
        name: 'test-one',
        album: 'test',
        format: 'jpg',
        created_at: new Date('1982-04-26'),
        height: 240,
        orientation: Orientation.Portrait,
        public_id: 'id-456',
        version: 'v-456',
        width: 320,
        tags: ['prominent'],
      },
    ];
    const { container } = render(<Gallery photos={photos} />);
    const pictures = container.querySelectorAll('picture');

    expect(pictures).toHaveLength(2);
  });
});
