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
    {photos.map(({ orientation, public_id, tags, version }: Photo) => {
      const isProminent: boolean = tags.includes('prominent');

      return (
        <Link as={`/albums/${public_id}`} href="/albums/[albumName]/[public_id]" key={`${public_id}-${version}`}>
          <LinkSt isProminent={isProminent} orientation={orientation}>
            <Picture lazyLoad public_id={public_id} version={version} />
          </LinkSt>
        </Link>
      );
    })}
  </Container>
);

export default Gallery;
