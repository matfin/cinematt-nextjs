import styled, { css } from 'styled-components';
import { media, text } from 'styles';
import { GridIcon } from 'components/icons';

const buttonStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
`;

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;

  ${media.md(css`
    justify-content: center;
  `)}
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Back = styled.a`
  ${buttonStyle}

  &::before {
    content: '<';
  }
`;

export const Forward = styled.a`
  ${buttonStyle}

  &::after {
    content: '>';
  }
`;

export const Details = styled.span`
  ${text}
`;

export const Grid = styled(GridIcon)`
  width: 5rem;
  height: 2rem;
`;

export const GridLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
