import styled, { css } from 'styled-components';
import { breakpoints, dimensions, colours, media } from 'styles';
import Picture from 'components/picture/picture';
import { Image } from 'components/picture/picture.css';
import FooterNav from 'components/footernav/footernav';

export const Container = styled.div`
  ${media.base(
    css`
      position: fixed;
      top: ${dimensions.navigationHeight}rem;
      left: 0;
      bottom: ${dimensions.navigationHeight}rem;
      right: 0;
    `,
    breakpoints.lg,
  )}

  ${media.lg(css`
    height: calc(100vh - ${dimensions.navigationHeight * 2}rem);
  `)}
`;

export const PictureSt = styled(Picture)`
  ${Image} {
    object-fit: contain;
  }
`;

export const FooterNavigation = styled(FooterNav)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${dimensions.navigationHeight}rem;
  background: ${colours.secondaryOpaque};
`;
