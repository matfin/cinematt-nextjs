import React from 'react';
import { Container, Line, LinePlacement } from './menubutton.css';

export interface Props {
  className?: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const MenuButton = ({ className, isOpen, onClick }: Props): JSX.Element => (
  <Container aria-label="Menu" className={className} onClick={onClick}>
    <Line placement={LinePlacement.TOP} isOpen={isOpen} />
    <Line placement={LinePlacement.MIDDLE} isOpen={isOpen} />
    <Line placement={LinePlacement.BOTTOM} isOpen={isOpen} />
  </Container>
);

export default MenuButton;
