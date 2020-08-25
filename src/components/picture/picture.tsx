import React, { Fragment, useCallback, useRef, useState, useEffect } from 'react';
import { PictureSourceSize } from 'models/interfaces';
import { resourceBaseUrl, detailSourceMediaQueries, tileSourceMediaQueries } from 'config';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { Image, LoadingStrip, PictureContainer } from './picture.css';

interface PictureSourcesProps {
  isDetail: boolean;
  public_id: string;
  shouldLoad: boolean;
  version: string;
}

export interface Props {
  className?: string;
  isDetail?: boolean;
  lazyLoad?: boolean;
  public_id: string;
  version: string;
}

export const altText = (public_id = ''): string => {
  const title = public_id.split('/')[1];

  return title ? title.replace(/-/gi, ' ') : 'missing title';
};

export const pictureSizePaths = (
  ext: string,
  index: number,
  public_id: string,
  size: number,
  version: string,
): string => {
  const dpr = index > 0 ? `${index + 1}x` : '';

  return `${resourceBaseUrl}/w_${size}/v${version}/${public_id}.${ext} ${dpr}`;
};

export const pictureSources = ({ isDetail, public_id, shouldLoad, version }: PictureSourcesProps): JSX.Element[] => {
  const sourceMediaQueries = isDetail ? detailSourceMediaQueries : tileSourceMediaQueries;

  return sourceMediaQueries.map(
    ({ minWidth, sizes }: PictureSourceSize): JSX.Element => {
      const srcSetWebP: string = sizes
        .map((size: number, index: number) => pictureSizePaths('webp', index, public_id, size, version))
        .join(',');
      const srcSetJpg: string = sizes
        .map((size: number, index: number) => pictureSizePaths('jpg', index, public_id, size, version))
        .join(',');

      return (
        <Fragment key={`${public_id}-${version}-${minWidth}`}>
          <source media={`(min-width: ${minWidth}px)`} srcSet={shouldLoad ? srcSetWebP : null} type="image/webp" />
          <source media={`(min-width: ${minWidth}px)`} srcSet={shouldLoad ? srcSetJpg : null} type="image/jpeg" />
        </Fragment>
      );
    },
  );
};

const Picture = ({ className, isDetail = false, lazyLoad = false, public_id, version }: Props): JSX.Element => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const imgSrc = `${resourceBaseUrl}/w_1280/v${version}/${public_id}.jpg`;
  const imgAlt = altText(public_id);
  const imgRef = useRef(null);
  const onImageLoad = useCallback((): void => {
    setHasLoaded(true);
  }, [public_id, version]);

  useIntersectionObserver(imgRef, (): void => {
    setShouldLoad(true);
  });

  useEffect((): void => {
    if (!lazyLoad) {
      setShouldLoad(true);
    }
  }, [lazyLoad]);

  return (
    <PictureContainer className={className} hasLoaded={hasLoaded}>
      {pictureSources({ isDetail, public_id, shouldLoad, version })}
      <Image alt={imgAlt} hasLoaded={hasLoaded} onLoad={onImageLoad} ref={imgRef} src={shouldLoad ? imgSrc : null} />
      {!hasLoaded && shouldLoad && <LoadingStrip />}
    </PictureContainer>
  );
};

export default Picture;
