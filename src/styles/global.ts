import { createGlobalStyle, css } from 'styled-components';
import { breakpoints, colours, defaultFont } from './vars';
import { media } from './mixins';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    color: ${colours.primary};
    background: ${colours.secondary};
    font-family: ${defaultFont};
    font-variant-ligatures: no-common-ligatures;

    &.overflow-lock {
      ${media.base(
        css`
          overflow: hidden;
        `,
        breakpoints.lg,
      )}
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: inherit;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: 0;
    }
  }
`;
