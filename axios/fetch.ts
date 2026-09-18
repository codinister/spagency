import axios from 'axios';

const client = axios.create({
  baseURL: '/api'
});

export default function fetch({ ...options }) {
  return client(options)
    .then((resp) => resp)
    .catch((err) => err);
}
