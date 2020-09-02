import styled, { css } from 'styled-components';
import { Color } from 'models/interfaces';
import { animationCurve } from 'styles';
import Loading from 'components/loading/loading';

interface ImageProps {
  hasLoaded: boolean;
}

interface PictureProps {
  hasLoaded: boolean;
  colors: Color[];
}

export const gradient = (colors: Color[], start = 0, end = 5): string =>
  colors
    .slice(start, end)
    .map(({ code }: Color): string => `${code}`)
    .join(',');

export const PictureContainer = styled.picture<PictureProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: border 350ms ${animationCurve};
  ${({ colors }: PictureProps) => css`
    background: linear-gradient(217deg, ${gradient(colors, 0, 5)});
  `}

  ${({ hasLoaded }) =>
    hasLoaded &&
    css`
      background: none;
    `}
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 75%;
  object-position: center;
  object-fit: cover;
  opacity: 0;
  transition: opacity 350ms ${animationCurve};

  ${({ hasLoaded }) =>
    hasLoaded &&
    css`
      height: 100%;
      opacity: 1;
    `};
`;

export const LoadingStrip = styled(Loading)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
