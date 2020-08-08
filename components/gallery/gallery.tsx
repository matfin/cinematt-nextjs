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
    {photos.map(({ orientation, publicId, version }: Photo) => (
      <Link as={`/albums/${publicId}`} href="/albums/[slug]/[publicId]" key={`${publicId}-${version}`}>
        <LinkSt orientation={orientation}>
          <Picture lazyLoad publicId={publicId} version={version} />
        </LinkSt>
      </Link>
    ))}
  </Container>
);

export default Gallery;
