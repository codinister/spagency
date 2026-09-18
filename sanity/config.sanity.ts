'use client'

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/index';

const key = process.env.NEXT_PUBLIC_SANITY_CLIENT_KEY || '';

export default defineConfig({
  projectId: key,
  dataset: 'production',
  basePath: '/admindashboard',
  title: 'spagency',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});

















