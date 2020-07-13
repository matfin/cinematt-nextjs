import { Orientation } from './types';

export interface Param {
  params: {
    id: string;
  }
}

export interface Photo {
  height: number;
  orientation: Orientation,
  publicId: string;
  version: string;
  width: number;
}

export interface PictureSourceSize {
  minWidth: number;
  sizes: number[];
}
