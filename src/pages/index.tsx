import React from 'react';
import { Album, Photo, StaticAlbumProps } from 'models/interfaces';
import Gallery from 'components/gallery/gallery';
import Layout from 'components/layout/layout';
import { getAlbum } from 'lib/albums';

interface Props {
  album: Album;
  titlePhoto: Photo;
}

const Index = ({ album, titlePhoto }: Props): JSX.Element => (
  <Layout titlePhoto={titlePhoto}>
    <Gallery photos={album.photos} />
  </Layout>
);

export async function getStaticProps(): Promise<StaticAlbumProps> {
  const album: Album = await getAlbum('featured');
  const titlePhoto: Photo | null = album.photos.find(({ tags }): boolean => tags.includes('title'));

  return {
    props: {
      album,
      ...(titlePhoto ? { titlePhoto } : null),
    },
  };
}

export default Index;
