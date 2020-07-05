import config from '../config';

interface Param {
  params: {
    id: string;
  }
}

export const getAlbumIds = (): Param[] => {
  const { albums } = config;

  return albums.map((id: string): Param => (
    {
      params: {
        id
      }
    }
  ));
};

export const getAlbumData = (id: string): any => {
  return {
    id,
    coming: 'Soon!'
  };
};
