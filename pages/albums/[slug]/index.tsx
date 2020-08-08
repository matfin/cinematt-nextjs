import React from 'react';
import { AlbumParam, Photo, StaticAlbumProps, StaticPaths } from 'models/interfaces';
import Gallery from 'components/gallery/gallery';
import Layout from 'components/layout/layout';
import { getAlbumSlugs, getPhotos } from 'lib/albums';

interface Props {
  photos: Photo[];
}

const Album = ({ photos }: Props): JSX.Element => (
  <Layout>
    <Gallery photos={photos} />
  </Layout>
);

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = getAlbumSlugs();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: AlbumParam): Promise<StaticAlbumProps> {
  const { slug } = params;
  const photos: Photo[] = await getPhotos(slug);

  return {
    props: {
      photos,
    },
  };
}

export default Album;
