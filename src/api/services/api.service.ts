import { catsClient, dogsClient } from '../axios';
import { CatsApiResponse, DogsApiResponse } from '../types';

async function getCatImages() {
  return catsClient.get<CatsApiResponse>('?limit=10');
}

async function getDogImages() {
  return dogsClient.get<DogsApiResponse>('');
}

export { getCatImages, getDogImages };
