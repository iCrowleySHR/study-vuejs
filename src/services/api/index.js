import axios from 'axios';

const BASE_URL = 'https://meowfacts.herokuapp.com/';

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    // headers: {
    //   'X-Custom-Header': 'foobar',
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    // }
  });