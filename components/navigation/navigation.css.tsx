import styled from 'styled-components';
import { text } from '../../styles';

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 6rem auto;
  grid-template-columns: 1rem auto 1rem;
`;

export const NavItemList = styled.ul`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 2.5rem);

  ${text};
`;
