import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token';

  return client(options)
    .then((response: any) => response)
    .catch((error: string) => error);
};
