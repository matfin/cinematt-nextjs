import React from 'react';
import { Button, Container, Title } from './header.css';

export interface Props {
  className?: string;
  navRevealed: boolean;
  onMenuButtonClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Header = ({ className, navRevealed, onMenuButtonClick }: Props): JSX.Element => (
  <Container className={className}>
    <Title>Cinematt</Title>
    <Button isOpen={navRevealed} onClick={onMenuButtonClick} />
  </Container>
);

export default Header;
