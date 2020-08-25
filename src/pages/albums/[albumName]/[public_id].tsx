import React from 'react';
import { Photo, PictureParam, StaticPaths, StaticPhotoProps } from 'models/interfaces';
import Layout from 'components/layout/layout';
import { getPhoto, getPhotoPublicIds } from 'lib/photos';

import { Container, PictureSt } from 'styles/pages/picturedetail.css';

interface Props {
  photo: Photo;
}

const PictureDetail = ({ photo }: Props): JSX.Element => (
  <Layout titlePhoto={photo}>
    <Container photoHeight={photo.height}>
      <PictureSt isDetail lazyLoad public_id={photo.public_id} version={photo.version} />
    </Container>
  </Layout>
);

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = await getPhotoPublicIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: PictureParam): Promise<StaticPhotoProps> {
  const { albumName, public_id } = params;
  const photo: Photo | null = await getPhoto(`${albumName}/${public_id}`);

  return {
    props: {
      photo,
    },
  };
}

export default PictureDetail;
