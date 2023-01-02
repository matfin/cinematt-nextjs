import { useRouter } from 'next/router';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Header, { Props } from './header';

jest.mock('next/router', (): { useRouter: jest.Mock } => ({
  useRouter: jest.fn(),
}));

describe('Header tests', (): void => {
  const defaultProps: Props = {
    navRevealed: false,
    onMenuButtonClick: jest.fn(),
    onTitleClick: jest.fn(),
  };

  beforeEach((): void => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      query: {
        albumName: 'test-slug-ahee',
      },
    }));
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });

  it('renders the component with the title', (): void => {
    const { container } = render(<Header {...defaultProps} />);

    expect(container).toBeTruthy();
    expect(container.querySelector('h1')).toBeTruthy();
    expect(container.querySelector('a')).toBeFalsy();
  });

  it('executes the callback on button click', async (): Promise<void> => {
    const spyOnMenuButtonClick = jest.fn();
    const { container } = render(<Header {...defaultProps} onMenuButtonClick={spyOnMenuButtonClick} />);
    const button = container.querySelector('button');

    fireEvent.click(button);

    await waitFor((): void => {
      expect(spyOnMenuButtonClick).toHaveBeenCalled();
    });
  });

  it('renders the back button', (): void => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      query: {
        public_id: 'test-publicId',
        albumName: 'test-slug',
      },
    }));

    const { container } = render(<Header {...defaultProps} />);

    expect(container.querySelector('h1')).toBeFalsy();
    expect(container.querySelector('button')).toBeTruthy();
  });
});
