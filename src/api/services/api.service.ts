import { catsClient, dogsClient } from '../axios';
import { CatsApiResponse, DogsApiResponse } from '../types';

async function getCatImages() {
  const response = await catsClient.get<CatsApiResponse[]>('?limit=10');
  return response.data?.map((cat) => cat.url);
}

async function getDogImages() {
  const response = await dogsClient.get<DogsApiResponse>('');
  return response.data.message;
}

export { getCatImages, getDogImages };
