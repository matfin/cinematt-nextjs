const { resources } = require('./assets/photos/all.json');
const fs = require('fs').promises;

const albumName = public_id => public_id.split('/')[0];
const photos = resources.map(({ public_id, version }) => ({
  album: albumName(public_id),
  public_id,
  version
}));
const uniqueAlbumNames = [...new Set(photos.map(({ album }) => album))];
const albums = uniqueAlbumNames.reduce((a,b) => (a[b] = [], a), {});

photos.forEach(({ album, public_id, version }) => {
  albums[album].push({ public_id, version });
});

uniqueAlbumNames.forEach(async(name) => {
  const payload = albums[name];
  const json = JSON.stringify(payload);
  const path = `./assets/photos/${name}.json`;

  await fs.writeFile(path, json, 'utf8');
});
