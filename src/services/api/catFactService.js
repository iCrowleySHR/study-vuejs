import { api } from './index.js'

const BASE_URL = 'https://meowfacts.herokuapp.com';

export async function getCatFact() {
  const response = await api.get(`${BASE_URL}/?lang=por-br`);
  return response.data.data[0];
}
