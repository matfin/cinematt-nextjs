const { resources } = require('./assets/photos/all.json');
const fs = require('fs').promises;

const albumName = public_id => public_id.split('/')[0];
const photos = resources.map(({ height, public_id, version, width }) => ({
  album: albumName(public_id),
  height,
  publicId: public_id,
  version,
  width,
}));
const uniqueAlbumNames = [...new Set(photos.map(({ album }) => album))];
const albums = uniqueAlbumNames.reduce((a,b) => (a[b] = [], a), {});

photos.forEach(({ album, height, publicId, version, width }) => {
  albums[album].push({ height, publicId, version, width });
});

uniqueAlbumNames.forEach(async(name) => {
  const payload = albums[name];
  const json = JSON.stringify(payload);
  const path = `./assets/photos/${name}.json`;

  await fs.writeFile(path, json, 'utf8');
});
