import { promises as fs } from 'fs';
import { albums } from 'config';
import { Album, AlbumParam, Photo } from 'models/interfaces';
import { getPhoto } from 'lib/photos';
import { Orientation } from 'models/types';

export const getAlbumNames = (): AlbumParam[] => {
  return albums.map(
    (albumName: string): AlbumParam => ({
      params: {
        albumName,
      },
    }),
  );
};

export const getAlbum = async (name: string): Promise<Album | null> => {
  const filePath = `./albums/${name}/index.json`;

  try {
    const content: string = await fs.readFile(filePath, 'utf-8');
    const { name, photos }: Album = JSON.parse(content);
    const photosWithDetail: Photo[] = await Promise.all(
      photos.map(({ public_id }: Photo): Promise<Photo> => getPhoto(public_id)),
    );

    return {
      name,
      photos: photosWithDetail.map(
        (photo: Photo): Photo => ({
          ...photo,
          orientation: photo.width > photo.height ? Orientation.Landscape : Orientation.Portrait,
        }),
      ),
    };
  } catch (e) {
    console.log({
      message: `Could not fetch content for album: ${name}`,
      e,
    });
  }

  return null;
};
