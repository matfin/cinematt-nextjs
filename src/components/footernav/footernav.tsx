import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Album, Photo } from 'models/interfaces';
import { Direction } from 'models/types';
import useKeyDown from 'hooks/useKeyDown';
import useSwipe from 'hooks/useSwipe';
import { Back, Container, Details, Forward, Grid, GridLink, Navigation } from './footernav.css';

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

  useKeyDown(({ keyCode }): Promise<boolean> => {
    switch (keyCode) {
      case 37:
        return goPrev();
      case 39:
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
        <Link as={backUrl} href="/albums/[albumName]/[public_id]" passHref>
          <Back />
        </Link>
        <Details>
          {currentIndex + 1} of {photoCount}
        </Details>
        <Link as={forwardUrl} href="/albums/[albumName]/[public_id]" passHref>
          <Forward />
        </Link>
      </Navigation>
      <Link as={`/albums/${name}`} href="/albums/[albumName]" passHref>
        <GridLink>
          <Grid />
        </GridLink>
      </Link>
    </Container>
  );
};

export default FooterNav;
