import React from 'react';
import { Photo, PictureSourceSize } from '../../interfaces';
import { Image, PictureContainer } from './picture.css';

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
  {
    minWidth: 320,
    sizes: [320, 640, 960]
  },
];

const resourceBaseUrl = 'https://res.cloudinary.com/matt-finucane-portfolio/image/upload';

const pictureSources = ({ publicId, version }): JSX.Element[] => {
  return (
    sourceMediaQueries.map(({ minWidth, sizes }: PictureSourceSize): any => (
      <source
        key={`${version}-${minWidth}`}
        media={`(min-width: ${minWidth}px)`}
        srcSet={sizes.map((size: number, index: number): string => `
          ${resourceBaseUrl}/w_${size}/v${version}/${publicId}.jpg ${index + 1}x
        `).join(',')}
      />
    ))
  );
};

const Picture = ({
  className,
  height,
  orientation,
  publicId,
  version,
  width,
}: Props): JSX.Element => (
  <PictureContainer className={className} orientation={orientation}>
    {pictureSources({ publicId, version })}
    <Image
      calcHeight={height}
      calcWidth={width}
      orientation={orientation}
      src={`${resourceBaseUrl}/w_1280/v${version}/${publicId}.jpg`}
    />
  </PictureContainer>
);

export default Picture;
