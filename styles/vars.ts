import { Breakpoints, Colours, Layers } from '../types';

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

export const layers: Layers = {
  base: 1,
  over: 2,
  top: 3,
  under: -1,
};

export const animationCurve: string = 'cubic-bezier(0.91, 0.03, 0.12, 1)';
