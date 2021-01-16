import React, { Fragment, useCallback, useRef, useState, useEffect } from 'react';
import { PictureSourceSize, Photo } from 'models/interfaces';
import { resourceBaseUrl, detailSourceMediaQueries, tileSourceMediaQueries } from 'config';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { Image, LoadingStrip, PictureContainer } from './picture.css';

interface PictureSourcesProps {
  isDetail: boolean;
  photo: Photo;
  shouldLoad: boolean;
}

export interface Props {
  className?: string;
  isDetail?: boolean;
  lazyLoad?: boolean;
  photo: Photo;
}

export const altText = (public_id = ''): string => {
  const title = public_id.split('/')[1];

  return title ? title.replace(/-/gi, ' ') : 'missing title';
};

export const pictureSizePaths = (ext: string, index: number, photo: Photo, size: number): string => {
  const dpr = index > 0 ? `${index + 1}x` : '';
  const { public_id, version } = photo;

  return `${resourceBaseUrl}/w_${size}/v${version}/${public_id}.${ext} ${dpr}`;
};

export const pictureSources = ({ isDetail, photo, shouldLoad }: PictureSourcesProps): JSX.Element[] => {
  const sourceMediaQueries = isDetail ? detailSourceMediaQueries : tileSourceMediaQueries;
  const { public_id, version } = photo;

  return sourceMediaQueries.map(
    ({ minWidth, sizes }: PictureSourceSize): JSX.Element => {
      const srcSetWebP: string = sizes
        .map((size: number, index: number) => pictureSizePaths('webp', index, photo, size))
        .join(',');
      const srcSetJpg: string = sizes
        .map((size: number, index: number) => pictureSizePaths('jpg', index, photo, size))
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

const Picture = ({ className, isDetail = false, lazyLoad = false, photo }: Props): JSX.Element => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const { orientation, public_id, version } = photo;
  const imgSrc = `${resourceBaseUrl}/w_1280/v${version}/${public_id}.jpg`;
  const imgAlt = altText(public_id);
  const imgRef = useRef(null);

  const onImageLoad = useCallback((): void => {
    setHasLoaded(true);
  }, [public_id, version]);

  useIntersectionObserver(imgRef, (): void => {
    if (lazyLoad) {
      setShouldLoad(true);
    }
  });

  useEffect((): void => {
    if (!lazyLoad) {
      setShouldLoad(true);
    }
  }, [lazyLoad]);

  useEffect((): void => {
    setHasLoaded(false);
  }, [photo]);

  return (
    <PictureContainer className={className}>
      {pictureSources({ isDetail, photo, shouldLoad })}
      <Image
        alt={imgAlt}
        hasLoaded={hasLoaded}
        height="auto"
        isDetail={isDetail}
        onLoad={onImageLoad}
        orientation={orientation}
        ref={imgRef}
        src={shouldLoad ? imgSrc : null}
        width="100%"
      />
      {!hasLoaded && shouldLoad && <LoadingStrip />}
    </PictureContainer>
  );
};

export default Picture;
