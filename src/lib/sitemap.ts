import { albums } from 'config';
import { getAlbum } from 'lib/albums';
import { Album, Photo, SitemapEntry } from 'models/interfaces';

export const getSitemapRoutes = async (): Promise<SitemapEntry[]> => {
  const allAlbums: Album[] = await Promise.all(albums.map((name: string): Promise<Album> => getAlbum(name)));
  const allPhotos: Photo[] = allAlbums.map(({ photos }: Album) => photos).flat();

  return allPhotos.map(
    ({ album, created_at, name }: Photo): SitemapEntry => ({
      lastmod: created_at.toString(),
      loc: `albums/${album}/${name}`,
    }),
  );
};
