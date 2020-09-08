import styled, { css } from 'styled-components';
import { animationCurve, colours, media, text } from 'styles';

interface LinkTextProps {
  isActive: boolean;
}

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-columns: 1.5rem auto 1.5rem;

  ${media.lg(css`
    grid-template-rows: auto;
  `)}
`;

export const LinkTextSt = styled.a<LinkTextProps>`
  position: relative;

  &::after {
    position: absolute;
    height: 0.1875rem;
    width: 0;
    bottom: -2px;
    left: 0;
    background: ${colours.primary};
    content: '';
    transition: width 350ms ${animationCurve};

    ${({ isActive }: LinkTextProps) =>
      isActive &&
      css`
        width: 100%;
      `}
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const NavItemList = styled.ul`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 2.5rem);

  ${text}

  ${media.lg(css`
    grid-row: 1;
    grid-template-columns: 1rem auto 1rem;
    grid-template-rows: repeat(10, 3rem);

    li {
      grid-column: 2 / 3;
    }
  `)}
`;
