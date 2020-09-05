import React from 'react';
import { Album, Photo, PictureParam, StaticPaths, StaticPhotoProps } from 'models/interfaces';
import Layout from 'components/layout/layout';
import { getPhoto, getPhotoPublicIds } from 'lib/photos';
import { getAlbum } from 'lib/albums';
import { Container, FooterNavigation, PictureSt } from 'styles/pages/picturedetail.css';

interface Props {
  album: Album;
  photo: Photo;
}

const PictureDetail = ({ album, photo }: Props): JSX.Element => {
  return (
    <Layout titlePhoto={photo}>
      <Container>
        <PictureSt isDetail lazyLoad photo={photo} />
      </Container>
      <FooterNavigation album={album} currentPhoto={photo} />
    </Layout>
  );
};

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = await getPhotoPublicIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: PictureParam): Promise<StaticPhotoProps> {
  const { albumName, public_id } = params;
  const photo: Photo | null = await getPhoto(`${albumName}/${public_id}`);
  const album: Album | null = await getAlbum(albumName);

  return {
    props: {
      album,
      photo,
    },
  };
}

export default PictureDetail;
