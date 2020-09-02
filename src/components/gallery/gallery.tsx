import React from 'react';
import Link from 'next/link';
import { Photo } from 'models/interfaces';
import Picture from 'components/picture/picture';
import { Container, LinkSt } from './gallery.css';

export interface Props {
  className?: string;
  photos: Photo[];
}

const Gallery = ({ className, photos }: Props): JSX.Element => (
  <Container className={className}>
    {photos.map((photo: Photo) => {
      const { public_id, orientation, tags, version } = photo;
      const isProminent: boolean = tags.includes('prominent');

      return (
        <Link as={`/albums/${public_id}`} href="/albums/[albumName]/[public_id]" key={`${public_id}-${version}`}>
          <LinkSt isProminent={isProminent} orientation={orientation}>
            <Picture lazyLoad photo={photo} />
          </LinkSt>
        </Link>
      );
    })}
  </Container>
);

export default Gallery;
