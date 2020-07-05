import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 8rem auto;
  grid-template-columns: 1rem auto 1rem;
`;

export const NavItemList = styled.ul`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 3rem);
`;
