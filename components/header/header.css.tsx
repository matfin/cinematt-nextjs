import styled from 'styled-components';
import MenuButton from '../menubutton/menubutton';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 100;
`;

export const Button = styled(MenuButton)`
  width: 4rem;
  height: 4rem;
`;
