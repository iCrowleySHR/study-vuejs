import { api } from './index.js'

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export async function getCatImage() {
  const response = await api.get(`${BASE_URL}`);
  return response.data[0].url;
}
