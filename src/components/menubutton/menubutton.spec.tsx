import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import * as utils from 'utils';
import MenuButton, { Props } from './menubutton';

describe('MenuButton tests', (): void => {
  const defaultProps: Props = {
    isOpen: false,
    onClick: jest.fn(),
  };
  const spyShouldUseTouch = jest.spyOn(utils, 'isTouchDevice');

  beforeEach((): void => {
    spyShouldUseTouch.mockReturnValue(false);
  });

  afterAll((): void => {
    spyShouldUseTouch.mockRestore();
  });

  it('renders the component', (): void => {
    expect(render(<MenuButton {...defaultProps} />)).toBeTruthy();
  });

  it('executes the callback on click', async (): Promise<void> => {
    const spyOnClick = jest.fn();
    const { container } = render(<MenuButton {...defaultProps} onClick={spyOnClick} />);
    const button = container.querySelector('button');

    await act(
      async (): Promise<void> => {
        fireEvent.click(button);
        fireEvent.touchStart(button);
      },
    );

    await expect(spyOnClick).toHaveBeenCalledTimes(1);
  });

  it('executes the callback on touch', async (): Promise<void> => {
    spyShouldUseTouch.mockReturnValue(true);
    const spyOnClick = jest.fn();
    const { container } = render(<MenuButton {...defaultProps} onClick={spyOnClick} />);
    const button = container.querySelector('button');

    await act(
      async (): Promise<void> => {
        fireEvent.click(button);
        fireEvent.touchStart(button);
      },
    );

    await expect(spyOnClick).toHaveBeenCalledTimes(1);
  });
});
