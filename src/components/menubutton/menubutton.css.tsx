import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { animationCurve, colours } from 'styles';

export enum LinePlacement {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
}

interface ListStProps {
  placement: LinePlacement;
  isOpen: boolean;
}

const transformTo = (placement: LinePlacement): FlattenSimpleInterpolation => {
  switch (placement) {
    case LinePlacement.TOP: {
      return css`
        transform: translate3d(0, 13px, 0) rotate(-45deg);
      `;
    }
    case LinePlacement.BOTTOM: {
      return css`
        transform: translate3d(0, -0.75rem, 0) rotate(45deg);
      `;
    }
    default: {
      return css`
        transform: rotate(135deg);
      `;
    }
  }
};

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background-color: ${colours.secondary};
`;

export const Line = styled.span<ListStProps>`
  width: 2rem;
  height: 1px;
  background: ${colours.primary};
  transform-origin: center center;
  transition: transform 0.5s ${animationCurve}, rotate 0.5s ${animationCurve};
  ${({ isOpen, placement }) => isOpen && transformTo(placement)}
`;
