jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

import { useRouter } from 'next/router';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import Header, { Props } from './header';

describe('Header tests', (): void => {
  const defaultProps: Props = {
    navRevealed: false,
    onMenuButtonClick: jest.fn(),
  };

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      query: {
        albumName: 'test-slug-ahee',
      },
    }));
  });

  beforeEach((): void => {
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

    act((): void => {
      fireEvent.click(button);
    });

    await expect(spyOnMenuButtonClick).toHaveBeenCalled();
  });

  it('renders the website title', (): void => {
    useRouter.mockImplementation(() => ({
      query: {
        public_id: 'test-publicId',
        albumName: 'test-slug',
      },
    }));

    const { container } = render(<Header {...defaultProps} />);

    expect(container.querySelector('h1')).toBeFalsy();
    expect(container.querySelector('a')).toBeTruthy();
  });
});
