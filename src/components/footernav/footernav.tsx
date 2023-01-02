import React from 'react';
import { useRouter } from 'next/router';
import { Album, Photo } from 'models/interfaces';
import { Arrows, ArrowKeys, Direction } from 'models/types';
import useKeyDown from 'hooks/useKeyDown';
import useSwipe from 'hooks/useSwipe';
import { ArrowButton, Container, Details, Grid, GridLink, Navigation } from './footernav.css';

export interface Props {
  album: Album;
  className?: string;
  currentPhoto: Photo;
}

const urlFromPhoto = ({ public_id }: Photo): string => `/albums/${public_id}`;

const FooterNav = ({ album, className, currentPhoto }: Props): JSX.Element => {
  const { photos, name } = album;
  const router = useRouter();
  const photoCount: number = photos.length;
  const currentIndex: number = photos.findIndex(({ public_id }: Photo) => public_id === currentPhoto.public_id);
  const firstPhoto: Photo = photos[0];
  const lastPhoto: Photo = photos[photos.length - 1];
  const nextPhoto: Photo | undefined = photos[currentIndex + 1];
  const prevPhoto: Photo | undefined = photos[currentIndex - 1];
  const backUrl: string = urlFromPhoto(prevPhoto ?? lastPhoto);
  const forwardUrl: string = urlFromPhoto(nextPhoto ?? firstPhoto);
  const goPrev = (): Promise<boolean> => router.push('/albums/[albumName]/[public_id]', backUrl);
  const goNext = (): Promise<boolean> => router.push('/albums/[albumName]/[public_id]', forwardUrl);

  useKeyDown(({ code }): Promise<boolean> => {
    switch (code) {
      case ArrowKeys.LEFT:
        return goPrev();
      case ArrowKeys.RIGHT:
        return goNext();
    }
  });

  useSwipe((direction: Direction): Promise<boolean> => {
    switch (direction) {
      case Direction.Right:
        return goPrev();
      case Direction.Left:
        return goNext();
    }
  });

  return (
    <Container className={className}>
      <Navigation>
        <ArrowButton href={backUrl}>{Arrows.Back}</ArrowButton>
        <Details>
          {currentIndex + 1} of {photoCount}
        </Details>
        <ArrowButton href={forwardUrl}>{Arrows.Forward}</ArrowButton>
      </Navigation>
      <GridLink href={`/albums/${name}`}>
        <>
          <Grid />
        </>
      </GridLink>
    </Container>
  );
};

export default FooterNav;
