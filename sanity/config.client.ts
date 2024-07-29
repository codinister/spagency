import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'j8t9esyp',
  dataset: 'production',
  apiVersion: '2024-02-09',
  useCdn: true,
});

export default client;
