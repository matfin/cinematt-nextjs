import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

import Navigation, { Props } from './navigation';

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const defaultProps: Props = {
  onNavigate: jest.fn(),
};

describe('Navigation tests', (): void => {
  afterEach((): void => {
    jest.clearAllMocks();
  });

  it('renders the component', (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/' });

    const wrapper = render(<Navigation {...defaultProps} />);
    const { container } = wrapper;
    const links = container.querySelectorAll('a');

    expect(wrapper).toBeTruthy();
    expect(links).toHaveLength(10);
  });

  it('executes the callback on navigation', async (): Promise<void> => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/albums/abandoned' });

    const spyOnNavigate = jest.fn();
    const { getByTestId } = render(<Navigation {...defaultProps} onNavigate={spyOnNavigate} />);
    const link = getByTestId('abandoned');

    fireEvent.click(link);

    await waitFor((): void => {
      expect(spyOnNavigate).toHaveBeenCalled();
    });
  });

  it('renders active links', (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/albums/abandoned' });

    const { getByTestId } = render(<Navigation {...defaultProps} />);
    const abandonedLink = getByTestId('abandoned');
    const peopleLink = getByTestId('people');

    expect(abandonedLink.getAttribute('aria-current')).not.toBeNull();
    expect(peopleLink.getAttribute('aria-current')).toBeNull();
  });

  it('renders the about link as current', (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/about' });

    const { getByTestId } = render(<Navigation {...defaultProps} />);
    const aboutLink = getByTestId('about');

    expect(aboutLink.getAttribute('aria-current')).not.toBeNull();
  });
});
