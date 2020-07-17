import React from 'react';
import { render } from '@testing-library/react';
import { Photo } from '../../interfaces';
import { Orientation } from '../../types';
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
        height: 320,
        orientation: Orientation.Landscape,
        publicId: 'id-123',
        version: 'v-123',
        width: 240,
      },
      {
        height: 240,
        orientation: Orientation.Portrait,
        publicId: 'id-456',
        version: 'v-456',
        width: 320,
      },
    ];
    const { container } = render(<Gallery photos={photos} />);
    const pictures = container.querySelectorAll('picture');

    expect(pictures).toHaveLength(2);
  });
});
