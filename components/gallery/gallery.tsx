import React from 'react';
import { Photo } from '../../interfaces';
import Picture from '../../components/picture/picture';
import { Container } from './gallery.css';

export interface Props {
  className?: string;
  photos: Photo[];
}

const Gallery = ({ className, photos }: Props): JSX.Element => (
  <Container className={className}>
    {photos.map(({ orientation, publicId, version }: Photo) => (
      <Picture
        key={`${publicId}-${version}`}
        lazyLoad
        orientation={orientation}
        publicId={publicId}
        version={version}
      />
    ))}
  </Container>
);

export default Gallery;
