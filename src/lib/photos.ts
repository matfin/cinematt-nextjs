import { promises as fs } from 'fs';
import { albums } from 'config';
import { Album, Photo, PictureParam } from 'models/interfaces';
import { Orientation } from 'models/types';
import { getAlbum } from 'lib/albums';

export const getPhotoPublicIds = async (): Promise<PictureParam[]> => {
  const allAlbums: Album[] = await Promise.all(albums.map((name: string): Promise<Album> => getAlbum(name)));
  const allPhotos: Photo[] = allAlbums.map(({ photos }: Album) => photos).flat();

  return allPhotos.map(
    ({ name, album }: Photo): PictureParam => ({
      params: {
        public_id: name,
        albumName: album,
      },
    }),
  );
};

export const getPhoto = async (public_id: string): Promise<Photo | null> => {
  const filePath = `./albums/${public_id}.json`;

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const photo: Photo = JSON.parse(content);

    return photo
      ? {
          ...photo,
          orientation: photo.width > photo.height ? Orientation.Landscape : Orientation.Portrait,
        }
      : null;
  } catch (e) {
    console.log(`unable to fetch photo: ${public_id}`, e);

    return null;
  }
};
