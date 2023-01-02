import React from 'react';
import { useRouter } from 'next/router';
import { render, fireEvent } from '@testing-library/react';
import { Photo } from 'models/interfaces';
import { Orientation, Direction, ArrowKeys } from 'models/types';
import { swipe } from 'testutils';
import FooterNav, { Props } from './footernav';

const photos: Photo[] = [
  {
    name: 'test-photo-one',
    album: 'test',
    public_id: 'test/test-photo-one',
    format: 'jpg',
    version: '123',
    created_at: new Date('1982-04-26'),
    width: 1024,
    height: 768,
    tags: [],
    orientation: Orientation.Landscape,
  },
  {
    name: 'test-photo-two',
    album: 'test',
    public_id: 'test/test-photo-two',
    format: 'jpg',
    version: '456',
    created_at: new Date('1982-04-26'),
    width: 1024,
    height: 768,
    tags: [],
    orientation: Orientation.Landscape,
  },
  {
    name: 'test-photo-three',
    album: 'test',
    public_id: 'test/test-photo-three',
    format: 'jpg',
    version: '789',
    created_at: new Date('1982-04-26'),
    width: 1024,
    height: 768,
    tags: [],
    orientation: Orientation.Landscape,
  },
];

const defaultProps: Props = {
  album: {
    name: 'test',
    photos,
  },
  currentPhoto: photos[1],
};

jest.mock('next/router', (): { useRouter: jest.Mock } => ({
  useRouter: jest.fn(),
}));

describe('Footer nav', (): void => {
  const spyPush = jest.fn();

  beforeEach((): void => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: spyPush,
    }));
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });

  it('renders the component', (): void => {
    expect(render(<FooterNav {...defaultProps} />)).toBeTruthy();
  });

  it('renders the correct navigation details and links', (): void => {
    const { container } = render(<FooterNav {...defaultProps} />);

    expect(container.querySelector('span').textContent).toEqual('2 of 3');
    expect(container.querySelectorAll('a')[0].href).toContain('/albums/test/test-photo-one');
    expect(container.querySelectorAll('a')[1].href).toContain('/albums/test/test-photo-three');
  });

  it('renders a link to the first photo if the current one is the last', (): void => {
    const props: Props = {
      ...defaultProps,
      currentPhoto: photos[2],
    };
    const { container } = render(<FooterNav {...props} />);

    expect(container.querySelector('span').textContent).toEqual('3 of 3');
    expect(container.querySelectorAll('a')[0].href).toContain('/albums/test/test-photo-two');
    expect(container.querySelectorAll('a')[1].href).toContain('/albums/test/test-photo-one');
  });

  it('renders a link to the last photo if the current one is the first', (): void => {
    const props: Props = {
      ...defaultProps,
      currentPhoto: photos[0],
    };
    const { container } = render(<FooterNav {...props} />);

    expect(container.querySelector('span').textContent).toEqual('1 of 3');
    expect(container.querySelectorAll('a')[0].href).toContain('/albums/test/test-photo-three');
    expect(container.querySelectorAll('a')[1].href).toContain('/albums/test/test-photo-two');
  });

  it('advances to the next and previous photos on key press', async (): Promise<void> => {
    render(<FooterNav {...defaultProps} />);

    fireEvent.keyDown(window, { code: ArrowKeys.LEFT });
    await expect(spyPush).toHaveBeenCalledWith('/albums/[albumName]/[public_id]', '/albums/test/test-photo-one');

    fireEvent.keyDown(window, { code: ArrowKeys.RIGHT });
    await expect(spyPush).toHaveBeenCalledWith('/albums/[albumName]/[public_id]', '/albums/test/test-photo-three');

    fireEvent.keyDown(window, { code: ArrowKeys.DOWN });
    await expect(spyPush).toHaveBeenCalledTimes(2);
  });

  it('advances to the next and previous photos on swipe', (): void => {
    render(<FooterNav {...defaultProps} />);

    swipe(Direction.Right);
    expect(spyPush).toHaveBeenCalledWith('/albums/[albumName]/[public_id]', '/albums/test/test-photo-one');

    swipe(Direction.Left);
    expect(spyPush).toHaveBeenCalledWith('/albums/[albumName]/[public_id]', '/albums/test/test-photo-three');
  });
});
