export interface CloudinaryApi {
  cloudName: string,
  key: string;
  maxResults: string,
  secret: string;
  apiUrl: string;
}

const albums: string[] = [
  'abandoned', 'people', 'music',
  'experimental', 'city', 'landscapes',
  'events', 'nature',
];

const cloudinary: CloudinaryApi = {
  cloudName: process.env.CLOUD_NAME,
  key: process.env.KEY,
  maxResults: process.env.MAX_RESULTS,
  secret: process.env.SECRET,
  apiUrl: process.env.API_URL,
};

const config = {
  albums,
  cloudinary,
};

export default config;
