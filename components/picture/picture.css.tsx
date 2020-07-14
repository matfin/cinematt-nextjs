import styled, { css } from 'styled-components';
import { Orientation } from '../../types';
import { animationCurve, colours } from '../../styles';
import Loading from '../loading/loading';

interface ImageProps {
  hasLoaded: boolean;
}

interface PictureProps {
  hasLoaded: boolean;
  orientation: Orientation;
}

export const PictureContainer = styled.picture<PictureProps>`
  position: relative;
  border: 1px solid ${colours.tertiary};
  transition: border 350ms ${animationCurve};

  ${({ hasLoaded }) => hasLoaded && css`
    border: 1px solid ${colours.secondary};
  `}

  ${({ orientation }: PictureProps) => orientation === Orientation.Portrait && css`
    grid-row-end: span 2;
  `}
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  opacity: 0;
  transition: opacity 350ms ${animationCurve};

  ${({ hasLoaded }) => hasLoaded && css`
    opacity: 1.0;
  `};
`;

export const LoadingStrip = styled(Loading)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
