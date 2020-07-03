import React from 'react';
import Layout from '../../components/layout/layout';
import { getAlbumIds, getAlbumData } from '../../lib/albums';

interface Props {
  id: string;
}

const Album = ({ id }: Props): JSX.Element => {
  return (
    <Layout>
      <h1>
        I am an album named {id}.
      </h1>
    </Layout>
  );
};

export async function getStaticPaths(): Promise<any> {
  const paths = getAlbumIds();

  return { paths, fallback: false };
};

export async function getStaticProps({ params }): Promise<any> {
  const { id } = params;
  const albumData: any = getAlbumData(id);

  return {
    props: albumData
  };
}

export default Album;
