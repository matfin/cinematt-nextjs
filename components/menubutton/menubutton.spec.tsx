import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import MenuButton, { Props } from './menubutton';

describe('MenuButton tests', (): void => {
  const defaultProps: Props = {
    isOpen: false,
    onClick: jest.fn(),
  };

  it('renders the component', (): void => {
    expect(render(<MenuButton {...defaultProps} />)).toBeTruthy();
  });

  it('executes the callback on click', async (): Promise<void> => {
    const spyOnClick = jest.fn();
    const { container } = render(<MenuButton {...defaultProps} onClick={spyOnClick} />);
    const button = container.querySelector('button');

    act((): void => {
      fireEvent.click(button);
    });

    await expect(spyOnClick).toHaveBeenCalled();
  });
});
