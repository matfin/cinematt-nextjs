import styled, { css } from 'styled-components';
import { animationCurve, colours } from '../../styles';
import Loading from '../loading/loading';

interface ImageProps {
  hasLoaded: boolean;
}

interface PictureProps {
  hasLoaded: boolean;
}

export const PictureContainer = styled.picture<PictureProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid ${colours.tertiary};
  transition: border 350ms ${animationCurve};

  ${({ hasLoaded }) =>
    hasLoaded &&
    css`
      border: 1px solid ${colours.secondary};
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
