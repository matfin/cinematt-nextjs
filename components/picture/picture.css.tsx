import styled, { css } from 'styled-components';
import { media } from '../../styles/mixins';
import { Orientation } from '../../types';

interface ImageProps {
  calcHeight: number;
  calcWidth: number;
  orientation: Orientation;
}

interface PictureProps {
  orientation: Orientation;
}

export const PictureContainer = styled.picture<PictureProps>`
  position: relative;

  ${({ orientation }: PictureProps) => orientation === Orientation.Portrait && css`
    grid-row-end: span 2;
  `}
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;
