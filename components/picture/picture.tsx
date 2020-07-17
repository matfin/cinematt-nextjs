import React, { Fragment, useCallback, useRef, useState, useEffect } from 'react';
import { PictureSourceSize } from '../../interfaces';
import { Orientation } from '../../types';
import { resourceBaseUrl, sourceMediaQueries } from '../../config';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Image, LoadingStrip, PictureContainer } from './picture.css';

interface Props {
  className?: string;
  lazyLoad?: boolean;
  orientation: Orientation;
  publicId: string;
  version: string;
}

const pictureSizePaths = (
  ext: string,
  index: number,
  publicId: string,
  size: number,
  version: string,
): string => {
  const dpr = index > 0 ? `${index + 1}x` : '';
  return `${resourceBaseUrl}/w_${size}/v${version}/${publicId}.${ext} ${dpr}`;
};

const pictureSources = ({ shouldLoad, publicId, version }): JSX.Element[] => (
  sourceMediaQueries.map(({ minWidth, sizes }: PictureSourceSize): JSX.Element => {
    const srcSetWebP: string = sizes.map((size: number, index: number) =>
      pictureSizePaths('webp', index, publicId, size, version)
    ).join(',');
    const srcSetJpg: string = sizes.map((size: number, index: number) =>
      pictureSizePaths('jpg', index, publicId, size, version)
    ).join(',');

    return (
      <Fragment key={`${publicId}-${version}-${minWidth}`}>
        <source
          media={`(min-width: ${minWidth}px)`}
          srcSet={shouldLoad ? srcSetWebP : null}
          type="image/webp"
        />
        <source
          media={`(min-width: ${minWidth}px)`}
          srcSet={shouldLoad ? srcSetJpg : null}
          type="image/jpeg"
        />
      </Fragment>
    );
  })
);

const Picture = ({
  className,
  lazyLoad = false,
  orientation,
  publicId,
  version,
}: Props): JSX.Element => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const imgSrc = `${resourceBaseUrl}/w_1280/v${version}/${publicId}.jpg`;
  const imgRef = useRef(null);
  const onImageLoad = useCallback((e): void => {
    setHasLoaded(true);
  }, [publicId, version]);

  useEffect((): void => {
    if (!lazyLoad) {
      setShouldLoad(true);
    }
  }, [lazyLoad]);

  useIntersectionObserver(imgRef, (): void => {
    setShouldLoad(true);
  });

  return (
    <PictureContainer
      className={className}
      hasLoaded={hasLoaded}
      orientation={orientation}
    >
      {pictureSources({ shouldLoad, publicId, version })}
      <Image
        hasLoaded={hasLoaded}
        onLoad={onImageLoad}
        ref={imgRef}
        src={shouldLoad ? imgSrc : null}
      />
      {!hasLoaded && shouldLoad && <LoadingStrip />}
    </PictureContainer>
  );
}

export default Picture;
