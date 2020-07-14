import { promises as fs } from 'fs';
import { albums } from '../config';
import { Param, Photo } from '../interfaces';
import { Orientation } from '../types';

export const getAlbumIds = (): Param[] => {
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

    return photos.map((photo: Photo) => {
      const { width, height } = photo;

      return {
        ...photo,
        orientation: width > height ? Orientation.Landscape : Orientation.Portrait,
      };
    });
  } catch (e) {
    return [];
  }
};
