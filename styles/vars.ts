import { Breakpoints, Colours, FontSizes, FontWeights, Layers } from 'types';

export const defaultFont = 'Gill Sans,Gill Sans MT,Calibri,sans-serif';

export const breakpoints: Breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1920,
};

export const colours: Colours = {
  primary: '#000',
  secondary: '#fff',
  tertiary: '#ccc',
};

export const fontSizes: FontSizes = {
  normal: 1.25,
  larger: 2,
  largest: 3,
};

export const fontWeights: FontWeights = {
  light: 100,
  medium: 200,
  heavy: 400,
};

export const layers: Layers = {
  base: 1,
  over: 2,
  top: 3,
  under: -1,
};

export const animationCurve = 'cubic-bezier(0.91, 0.03, 0.12, 1)';
export const lineHeight = 1.8;
