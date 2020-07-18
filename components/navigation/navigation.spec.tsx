import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import Navigation, { Props } from './navigation';

jest.mock('next/link', () => ({ children }) => children);

describe('Navigation tests', (): void => {
  const defaultProps: Props = {
    onNavigate: jest.fn(),
  };

  it('renders the component', (): void => {
    const wrapper = render(<Navigation {...defaultProps} />);
    const { container } = wrapper;
    const links = container.querySelectorAll('a');

    expect(wrapper).toBeTruthy();
    expect(links).toHaveLength(10);
  });

  it('executes the callback on navigation', async (): Promise<void> => {
    const spyOnNavigate = jest.fn();

    render(<Navigation {...defaultProps} onNavigate={spyOnNavigate} />);
    const link = document.querySelector('a');

    act((): void => {
      fireEvent.click(link);
    });

    await expect(spyOnNavigate).toHaveBeenCalled();
  });
});
