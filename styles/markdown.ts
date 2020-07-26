import styled, { css } from 'styled-components';
import { media } from './mixins';
import { fontSizes, fontWeights, lineHeight } from './vars';

const Heading = styled.h1`
  font-size: ${fontSizes.largest}rem;
  font-weight: ${fontWeights.light};
`;

const SubHeading = styled.h2`
  font-size: ${fontSizes.larger}rem;
  font-weight: ${fontWeights.light};

  ${media.md(css`
    font-size: ${fontSizes.larger * 1.5}rem;
  `)}
`;

export const text = css`
  font-size: ${fontSizes.normal}rem;
  font-weight: ${fontWeights.light};
  line-height: ${lineHeight};

  ${media.md(css`
    font-size: ${fontSizes.normal * 1.2}rem;
  `)}
`;

const Paragraph = styled.p`
  ${text}
`;

export const components = {
  h1: Heading,
  h2: SubHeading,
  p: Paragraph,
};
