import React from 'react';
import { Photo, PictureParam, StaticPaths, StaticPhotoProps } from 'models/interfaces';
import Layout from 'components/layout/layout';
import { getPhoto, getPhotoPublicIds } from 'lib/albums';
import { Container, PictureSt } from 'styles/pages/picturedetail.css';

interface Props {
  photo: Photo;
}

const PictureDetail = ({ photo: { height, publicId, version } }: Props): JSX.Element => (
  <Layout>
    <Container photoHeight={height}>
      <PictureSt isDetail lazyLoad publicId={publicId} version={version} />
    </Container>
  </Layout>
);

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = await getPhotoPublicIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: PictureParam): Promise<StaticPhotoProps> {
  const { slug, publicId } = params;
  const photo: Photo | null = await getPhoto(slug, publicId);

  return {
    props: {
      photo,
    },
  };
}

export default PictureDetail;
