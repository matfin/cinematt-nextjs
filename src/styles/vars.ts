import { Breakpoints, Colours, FontSizes, FontWeights, Layers } from '../models/types';

export const defaultFont = 'Gill Sans,Gill Sans MT,Calibri,sans-serif';

export const breakpoints: Breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

export const colours: Colours = {
  primary: '#000',
  secondary: '#fff',
  tertiary: '#ccc',
  secondaryOpaque: 'rgba(255,255,255, 0.9)',
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
