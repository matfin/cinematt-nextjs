import styled from 'styled-components';
import { dimensions, fontSizes, fontWeights } from 'styles';
import MenuButton from '../menubutton/menubutton';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  font-size: ${fontSizes.largest}rem;
  font-weight: ${fontWeights.light};
  line-height: ${dimensions.navigationHeight}rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Button = styled(MenuButton)`
  width: 5rem;
  height: 5rem;
`;

export const BackButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: ${dimensions.navigationHeight}rem;
  font-size: 2rem;

  &::before {
    content: '<';
  }
`;

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
