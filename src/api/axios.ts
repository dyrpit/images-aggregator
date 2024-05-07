import axios from 'axios';
import { API_URL } from './conts';

const catsClient = axios.create({
  baseURL: API_URL.CAT,
});

const dogsClient = axios.create({
  baseURL: API_URL.DOG,
});

export { catsClient, dogsClient };
