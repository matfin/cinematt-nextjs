import styled, { css } from 'styled-components';
import { colours, fontSizes, fontWeights } from 'styles';
import MenuButton from '../menubutton/menubutton';

const arrowLine = css`
  position: absolute;
  width: 1.5rem;
  left: 1rem;
  height: 0.125rem;
  background: ${colours.primary};
  content: '';
  transform-origin: right;
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.largest}rem;
  font-weight: ${fontWeights.light};
  line-height: 5rem;
`;

export const Button = styled(MenuButton)`
  width: 5rem;
  height: 5rem;
`;

export const BackButton = styled.span`
  width: 2rem;
  height: 5rem;

  &::before {
    ${arrowLine};
    top: 1.75rem;
    transform: rotate(-28deg);
  }

  &::after {
    ${arrowLine};
    bottom: 1.75rem;
    transform: rotate(28deg);
  }
`;

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
