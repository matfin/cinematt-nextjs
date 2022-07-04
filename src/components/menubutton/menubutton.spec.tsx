import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
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

    fireEvent.click(button);
    fireEvent.touchStart(button);

    await waitFor((): void => {
      expect(spyOnClick).toHaveBeenCalledTimes(1);
    });
  });

  it('executes the callback on touch', async (): Promise<void> => {
    spyShouldUseTouch.mockReturnValue(true);

    const spyOnClick = jest.fn();
    const { container } = render(<MenuButton {...defaultProps} onClick={spyOnClick} />);
    const button = container.querySelector('button');

    fireEvent.click(button);
    fireEvent.touchStart(button);

    await waitFor((): void => {
      expect(spyOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
