

import { createClient } from 'next-sanity';

const key = process.env.SANITY_SERVER_KEY || '';

export default createClient({
  projectId: key,
  dataset: 'production',
  apiVersion: '2026-07-06',
  useCdn: true
});