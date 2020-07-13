import { css } from 'styled-components';
import { breakpoints } from './vars';

export const media = (Object.keys(breakpoints) as (keyof typeof breakpoints)[]).reduce(
  (acc, label) => {
    acc[label] = (st: any): any => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${st}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof breakpoints]: any }
);
