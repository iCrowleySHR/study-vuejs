import { api } from '.'; 

export async function getCatFact() {
  const response = await api.get('?lang=por-br');
  return response.data.data[0];
}
