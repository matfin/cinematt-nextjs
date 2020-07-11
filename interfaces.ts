export interface Param {
  params: {
    id: string;
  }
}

export interface Photo {
  publicId: string;
  version: string;
}

export interface PictureSourceSize {
  minWidth: number;
  sizes: number[];
}
