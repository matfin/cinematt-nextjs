import { Orientation } from './types';

export interface IntersectionObserverMockProps {
  disconnect: () => jest.Mock<any, any>;
  observe: () => jest.Mock<any, any>;
  observerEntries: IntersectionObserverEntry[];
  unobserve: () => jest.Mock<any, any>;
}

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

export interface StaticPaths {
  fallback: boolean;
  paths: Param[];
}

export interface StaticAlbumProps {
  props: {
    photos: Photo[];
  }
}
