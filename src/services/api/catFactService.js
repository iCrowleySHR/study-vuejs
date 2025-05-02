import { api } from './index.js';

const BASE_URL = 'https://meowfacts.herokuapp.com';

export async function getCatFact(lang) {
  const response = await api.get(`${BASE_URL}/?lang=${lang}`);
  return response.data.data[0];
}
