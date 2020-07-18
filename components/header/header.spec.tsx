import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import Header, { Props } from './header';

describe('Header tests', (): void => {
  const defaultProps: Props = {
    navRevealed: false,
    onMenuButtonClick: jest.fn(),
  };

  it('renders the component', (): void => {
    expect(render(<Header {...defaultProps} />)).toBeTruthy();
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
});
