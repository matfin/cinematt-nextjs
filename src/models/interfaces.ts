/* eslint-disable @typescript-eslint/no-explicit-any */
import { Orientation } from './types';

export interface IntersectionObserverMockProps {
  disconnect: () => jest.Mock<any, any>;
  observe: () => jest.Mock<any, any>;
  observerEntries: IntersectionObserverEntry[];
  unobserve: () => jest.Mock<any, any>;
}

export interface Album {
  name: string;
  photos: Photo[];
}

export interface AlbumParam {
  params: {
    albumName: string;
  };
}

export interface PictureParam {
  params: {
    public_id: string;
    albumName: string;
  };
}

export interface Color {
  code: string;
  weight: number;
}

export interface Photo {
  name: string;
  album: string;
  public_id: string;
  format: string;
  version: string;
  created_at: Date;
  width: number;
  height: number;
  colors?: Color[];
  tags: string[];
  orientation?: Orientation;
}

export interface PictureSourceSize {
  minWidth: number;
  sizes: number[];
}

export interface StaticPaths {
  fallback: boolean;
  paths: AlbumParam[] | PictureParam[];
}

export interface StaticAlbumProps {
  props: {
    album: Album;
    titlePhoto?: Photo;
  };
}

export interface StaticPhotoProps {
  props: {
    photo?: Photo;
  };
}
