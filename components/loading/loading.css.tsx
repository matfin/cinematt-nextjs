import styled, { css, keyframes, Keyframes } from 'styled-components';
import { colours } from 'styles';

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
}

interface SquareProps {
  direction: Direction;
}

const verticalBounce = (direction: Direction): Keyframes => keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(0, ${direction === Direction.UP ? '0.5rem' : '-0.5rem'}, 0);
  }
  75% {
    transform: translate3d(0, ${direction === Direction.DOWN ? '0.5rem' : '-0.5rem'}, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Square = styled.div<SquareProps>`
  width: 1rem;
  height: 0.5rem;
  background: ${colours.primary};

  ${({ direction }: SquareProps) => css`
    animation: ${verticalBounce(direction)} 1000ms linear infinite;
  `}
`;
