import React from 'react';
import { Photo, StaticAlbumProps } from 'models/interfaces';
import Gallery from 'components/gallery/gallery';
import Layout from 'components/layout/layout';
import { getPhotos } from 'lib/albums';

interface Props {
  photos: Photo[];
}

const Index = ({ photos }: Props): JSX.Element => (
  <Layout>
    <Gallery photos={photos} />
  </Layout>
);

export async function getStaticProps(): Promise<StaticAlbumProps> {
  const photos: Photo[] = await getPhotos('featured');

  return {
    props: {
      photos,
    },
  };
}

export default Index;
