import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../styles';
import MenuButton from '../menubutton/menubutton';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.largest}rem;
  font-weight: ${fontWeights.light};
`;

export const Button = styled(MenuButton)`
  width: 5rem;
  height: 5rem;
`;
