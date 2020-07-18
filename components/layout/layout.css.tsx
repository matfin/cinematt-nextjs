import styled from 'styled-components';
import { animationCurve, colours, layers } from '../../styles';
import Header from '../header/header';
import Navigation from '../navigation/navigation';

interface NavProps {
  isRevealed: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    'header'
    'main';
  overflow-x: hidden;
`;

export const LayoutHeader = styled(Header)`
  z-index: ${layers.top};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  background: ${colours.secondary};
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Nav = styled(Navigation)`
  z-index: ${layers.over};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: transform 350ms ${animationCurve};
  transform: translate3d(100vw, 0, 0);
  background: ${colours.secondary};

  ${({ isRevealed }: NavProps) =>
    isRevealed &&
    `
    transform: translate3d(0, 0, 0);
  `};
`;
