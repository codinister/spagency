import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/index';

const config = defineConfig({
  projectId: 'j8t9esyp',
  dataset: 'production',
  apiVersion: '2024-02-06',
  title: 'S.P AGENCY',
  basePath: '/adminpage',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
