import { promises as fs } from 'fs';
import config from '../config';
import { Param, Photo } from '../interfaces';

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

export const getPhotos = async(id: string): Promise<any> => {
  const filePath = `./assets/photos/${id}.json`;

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const photos = JSON.parse(content);

    return photos.map(({ public_id, version }): Photo => ({ publicId: public_id, version }));
  } catch (e) {
    return [];
  }
};
