import fetch, { RequestInit, Response } from 'node-fetch';
import config, { CloudinaryApi } from '../config';

export const apiCall = async(resource: string, options: RequestInit = { method: 'GET' }): Promise<any> => {
  const {
    cloudName,
    key,
    maxResults,
    secret,
    apiUrl,
  }: CloudinaryApi = config.cloudinary;
  const url = `https://${key}:${secret}@${apiUrl}/${cloudName}/${resource}?max_results=${maxResults}`;
  const res: Response = await fetch(url, options);

  return await res.json();
};
