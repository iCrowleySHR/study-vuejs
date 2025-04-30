import axios from 'axios';

/* Pode colocar a baseURL aqui também*/

export const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
