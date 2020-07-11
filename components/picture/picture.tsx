import React from 'react';
import { Photo, PictureSourceSize } from '../../interfaces';

interface Props extends Photo {
  className?: string;
}

const sourceMediaQueries: PictureSourceSize[] = [
  {
    minWidth: 1920,
    sizes: [2560, 2560, 2560]
  },
  {
    minWidth: 1440,
    sizes: [2560, 2560, 2560]
  },
  {
    minWidth: 1280,
    sizes: [1280, 2560, 2560]
  },
  {
    minWidth: 1024,
    sizes: [1024, 2048, 2560]
  },
  {
    minWidth: 768,
    sizes: [768, 1536, 2560]
  },
  {
    minWidth: 640,
    sizes: [640, 1280, 1920]
  },
  {
    minWidth: 480,
    sizes: [480, 960, 1440]
  },
];

const resourceBaseUrl = 'https://res.cloudinary.com/matt-finucane-portfolio/image/upload/';

const pictureSources = ({ publicId, version }: Photo): JSX.Element[] => (
  sourceMediaQueries.map(({ minWidth, sizes }: PictureSourceSize): any => (
    <source
      key={`${version}-${minWidth}`}
      media={`(min-width: ${minWidth}px`}
      srcSet={sizes.map((size: number, index: number): string => `${resourceBaseUrl}w_${size}/v${version}/${publicId}.jpg ${index}x`).join(',')}
    />
  ))
);

const Picture = ({
  className,
  publicId,
  version,
}: Props): JSX.Element => (
  <picture className={className}>
    {pictureSources({ publicId, version })}
    <img src={`${resourceBaseUrl}/w_1280/v${version}/${publicId}.jpg`} />
  </picture>
);

export default Picture;
