import { PictureSourceSize } from 'models/interfaces';

export const albums: string[] = [
  'abandoned', 'people', 'music',
  'experimental', 'city', 'landscapes',
  'events', 'nature',
];

export const tileSourceMediaQueries: PictureSourceSize[] = [
  {
    minWidth: 1920,
    sizes: [960, 1920, 2560]
  },
  {
    minWidth: 1440,
    sizes: [1024, 2048, 2560]
  },
  {
    minWidth: 1280,
    sizes: [680, 1360, 2040]
  },
  {
    minWidth: 1024,
    sizes: [576, 1152, 1728]
  },
  {
    minWidth: 768,
    sizes: [448, 896, 1344]
  },
  {
    minWidth: 640,
    sizes: [724, 1448, 2172]
  },
  {
    minWidth: 480,
    sizes: [560, 1120, 1680]
  },
  {
    minWidth: 320,
    sizes: [320, 640, 960]
  },
];

export const detailSourceMediaQueries: PictureSourceSize[] = [
  {
    minWidth: 1920,
    sizes: [2560]
  },
  {
    minWidth: 1440,
    sizes: [1680, 2560, 2560]
  },
  {
    minWidth: 1280,
    sizes: [1360, 2560, 2560]
  },
  {
    minWidth: 1024,
    sizes: [1152, 2304, 2560]
  },
  {
    minWidth: 768,
    sizes: [896, 1792, 2560]
  },
  {
    minWidth: 640,
    sizes: [704, 1408, 2112]
  },
  {
    minWidth: 480,
    sizes: [560, 1120, 1680]
  },
  {
    minWidth: 320,
    sizes: [400, 800, 1200]
  },
];

export const resourceBaseUrl = 'https://res.cloudinary.com/matt-finucane-portfolio/image/upload';
