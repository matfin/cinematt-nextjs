import { createGlobalStyle } from 'styled-components';
import { colours, defaultFont } from './vars';

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
