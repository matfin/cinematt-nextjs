import { promises as fs } from 'fs';
import { albums } from '../config';
import { AlbumParam, Photo, PictureParam } from '../interfaces';
import { Orientation } from '../types';

export const getAlbumSlugs = (): AlbumParam[] => {
  return albums.map(
    (slug: string): AlbumParam => ({
      params: {
        slug,
      },
    }),
  );
};

export const getPhotoPublicIds = async (): Promise<PictureParam[]> => {
  const paths = [];

  await Promise.all(
    albums.map(
      async (slug: string): Promise<void> => {
        const photos = await getPhotos(slug);

        photos.forEach(({ publicId }: Photo) => {
          const [, name] = publicId.split('/');
          paths.push({
            params: {
              publicId: name,
              slug,
            },
          });
        });
      },
    ),
  );

  return paths;
};

export const getPhotos = async (slug: string): Promise<Photo[]> => {
  const filePath = `./assets/photos/${slug}.json`;

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const photos = JSON.parse(content);

    return photos.map(
      (photo: Photo): Photo => {
        const { width, height } = photo;

        return {
          ...photo,
          orientation: width > height ? Orientation.Landscape : Orientation.Portrait,
        };
      },
    );
  } catch (e) {
    return [];
  }
};

export const getPhoto = async (slug: string, publicId: string): Promise<Photo | null> => {
  const filePath = `./assets/photos/${slug}.json`;

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const photos = JSON.parse(content);
    const photo: Photo | undefined = photos.find((photo: Photo): boolean => photo.publicId === `${slug}/${publicId}`);

    return photo
      ? {
          ...photo,
          orientation: photo.width > photo.height ? Orientation.Landscape : Orientation.Portrait,
        }
      : null;
  } catch (e) {
    return null;
  }
};
