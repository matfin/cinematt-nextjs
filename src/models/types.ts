export type Breakpoints = {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type Dimensions = {
  navigationHeight: number;
};

export type Colours = {
  primary: string;
  secondary: string;
  tertiary: string;
  secondaryOpaque: string;
};

export type FontSizes = {
  normal: number;
  larger: number;
  largest: number;
};

export type FontWeights = {
  light: number;
  medium: number;
  heavy: number;
};

export type Layers = {
  base: number;
  over: number;
  top: number;
  under: number;
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
}

export enum Direction {
  Down = 'down',
  Left = 'left',
  Right = 'right',
  Up = 'up',
}
