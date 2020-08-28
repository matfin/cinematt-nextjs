import React from 'react';
import { Album, AlbumParam, Photo, StaticAlbumProps, StaticPaths } from 'models/interfaces';
import Gallery from 'components/gallery/gallery';
import Layout from 'components/layout/layout';
import { getAlbumNames, getAlbum } from 'lib/albums';

interface Props {
  album: Album;
  titlePhoto?: Photo;
}

const PhotoAlbum = ({ album, titlePhoto }: Props): JSX.Element => (
  <Layout titlePhoto={titlePhoto}>
    <Gallery photos={album.photos} />
  </Layout>
);

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = getAlbumNames();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: AlbumParam): Promise<StaticAlbumProps> {
  const { albumName } = params;
  const album: Album = await getAlbum(albumName);
  const titlePhoto: Photo | null = album.photos.find(({ tags }): boolean => tags.includes('title'));

  return {
    props: {
      album,
      ...(titlePhoto ? { titlePhoto } : null),
    },
  };
}

export default PhotoAlbum;
