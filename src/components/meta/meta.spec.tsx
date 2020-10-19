import React from 'react';
import { render } from '@testing-library/react';
import { Photo } from 'models/interfaces';
import Meta from './meta';

interface MockedHeadProps {
  children: JSX.Element;
}

const MockedHead = ({ children }: MockedHeadProps): JSX.Element => <>{children}</>;
// eslint-disable-next-line react/display-name
jest.mock('next/head', () => ({ children }: MockedHeadProps) => <MockedHead>{children}</MockedHead>);

describe('Meta tests', (): void => {
  it('should render the component without social media image tags', (): void => {
    const { container } = render(<Meta currentPath="/test" />);

    expect(container.querySelector('meta[property="og:image"]')).toBeFalsy();
    expect(container.querySelector('meta[name="twitter:image"]')).toBeFalsy();
    expect(container.querySelector('meta[name="twitter:image-alt"]')).toBeFalsy();
  });

  it('should render the component without social media image tags', (): void => {
    const titlePhoto: Photo = {
      created_at: new Date('1982-04-26'),
      format: 'jpg',
      height: 768,
      name: 'a-photo',
      album: 'test',
      public_id: 'test/a-photo',
      tags: ['title'],
      version: '12345',
      width: 1024,
    };
    const { container } = render(<Meta currentPath="/test" titlePhoto={titlePhoto} />);

    expect(container.querySelector('meta[property="og:image"]')).toBeTruthy();
    expect(container.querySelector('meta[name="twitter:image"]')).toBeTruthy();
    expect(container.querySelector('meta[name="twitter:image-alt"]')).toBeTruthy();
  });
});
