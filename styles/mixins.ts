import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from './vars';

export const media = (Object.keys(breakpoints) as (keyof typeof breakpoints)[]).reduce((acc, label: string) => {
  acc[label] = (st: string): FlattenSimpleInterpolation => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${st}
    }
  `;

  return acc;
}, {} as { [key in keyof typeof breakpoints] });
