import React from 'react';
import { Photo } from '../../interfaces';
import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import { getAlbumIds, getPhotos } from '../../lib/albums';

interface Props {
  photos: Photo[];
}

const Album = ({ photos }: Props): JSX.Element => {
  return (
    <Layout>
      <Gallery photos={photos} />
    </Layout>
  );
};

export async function getStaticPaths(): Promise<any> {
  const paths = getAlbumIds();

  return { paths, fallback: false };
};

export async function getStaticProps({ params }): Promise<any> {
  const { id } = params;
  const photos: Photo[] = await getPhotos(id);
  return {
    props: {
      photos
    }
  };
}

export default Album;
