import React from 'react';
import { Photo } from '../../interfaces';
import Picture from '../../components/picture/picture';
import { Container } from './gallery.css';

interface Props {
  className?: string;
  photos: Photo[];
}

const Gallery = ({ className, photos }: Props): JSX.Element => (
  <Container>
    {photos.map(({ height, orientation, publicId, version, width }: Photo) =>
      <Picture
        height={height}
        key={`${publicId}-${version}`}
        orientation={orientation}
        publicId={publicId}
        version={version}
        width={width}
      />
    )}
  </Container>
);

export default Gallery;
