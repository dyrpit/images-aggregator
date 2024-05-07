import { catsClient, dogsClient } from '../axios';

async function getCatsImages() {
  return catsClient.get('?limit=10');
}

async function getDogsImages() {
  return dogsClient.get('');
}

export { getCatsImages, getDogsImages };
