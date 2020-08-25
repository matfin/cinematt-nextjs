import styled from 'styled-components';
import Picture from 'components/picture/picture';

interface ContainerProps {
  photoHeight: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: calc(100vh - 160px);
`;

export const PictureSt = styled(Picture)`
  width: 100%;
  height: auto;

  img {
    object-fit: contain;
  }
`;
