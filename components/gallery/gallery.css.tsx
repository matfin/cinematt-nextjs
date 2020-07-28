import styled, { css } from 'styled-components';
import { Orientation } from '../../types';
import { media } from '../../styles/mixins';

interface LinkProps {
  orientation: Orientation;
}

export const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-auto-rows: calc(100vw * (9 / 16));
  grid-auto-flow: row dense;
  grid-gap: 0.25rem;
  padding: 0.25rem;

  ${media.md(css`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: calc(50vw * (9 / 16));
  `)}

  ${media.xl(css`
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw * (9 / 16));
  `)}
`;

export const LinkSt = styled.a`
  ${({ orientation }: LinkProps) =>
    orientation === Orientation.Portrait &&
    css`
      grid-row-end: span 2;
    `}
`;
