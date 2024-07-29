import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/index';

const config = defineConfig({
  projectId: 'j8t9esyp',
  dataset: 'production',
  apiVersion: '2024-02-06',
  title: 'S.P AGENCY',
  basePath: '/adminpage',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
