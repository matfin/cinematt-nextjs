import styled from 'styled-components';
import { breakpoints, components } from 'styles';

export const Container = styled.div`
  padding: 1rem 1rem 4rem 1rem;
  max-width: ${breakpoints.md}px;

  ${components.p} {
    margin: 2rem 0;
  }
`;
