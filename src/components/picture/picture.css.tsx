import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Orientation } from 'models/types';
import { animationCurve } from 'styles';
import Loading from 'components/loading/loading';

interface ImageProps {
  hasLoaded: boolean;
  isDetail: boolean;
  orientation: Orientation;
}

export const imageDimensions = (orientation: Orientation, isDetail: boolean): FlattenSimpleInterpolation => {
  if (isDetail) {
    return orientation === Orientation.Landscape
      ? css`
          width: 100%;
          height: auto;
        `
      : css`
          width: auto;
          height: 100%;
        `;
  }

  return css`
    width: 100%;
    height: 100%;
  `;
};

export const PictureContainer = styled.picture`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img<ImageProps>`
  ${({ isDetail, orientation }) => imageDimensions(orientation, isDetail)}
  object-position: center;
  object-fit: cover;
  opacity: 0;

  ${({ isDetail }: ImageProps) =>
    !isDetail &&
    css`
      transition: opacity 350ms ${animationCurve};
    `}

  ${({ hasLoaded }) =>
    hasLoaded &&
    css`
      opacity: 1;
    `}
`;

export const LoadingStrip = styled(Loading)`
  width: 100%;
`;
