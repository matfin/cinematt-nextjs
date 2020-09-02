import React from 'react';
import { isTouchDevice } from 'utils';
import { Container, Line, LinePlacement } from './menubutton.css';

export interface Props {
  className?: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {};

const MenuButton = ({ className, isOpen, onClick }: Props): JSX.Element => {
  const shouldUseTouch: boolean = isTouchDevice();

  return (
    <Container
      aria-label="Menu"
      className={className}
      onClick={!shouldUseTouch ? onClick : noop}
      onTouchStart={shouldUseTouch ? onClick : noop}
    >
      <Line placement={LinePlacement.TOP} isOpen={isOpen} />
      <Line placement={LinePlacement.MIDDLE} isOpen={isOpen} />
      <Line placement={LinePlacement.BOTTOM} isOpen={isOpen} />
    </Container>
  );
};

export default MenuButton;
