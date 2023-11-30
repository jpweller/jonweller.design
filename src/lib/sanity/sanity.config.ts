import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary';

import {
  PUBLIC_SANITY_STUDIO_PROJECT_ID as projectId,
  PUBLIC_SANITY_STUDIO_DATASET as dataset
} from '$env/static/public';

import { schemaTypes } from './schemas';

export default defineConfig({
  projectId,
  dataset,
  plugins: [deskTool(), cloudinarySchemaPlugin()],
  name: 'jon_weller_design',
  schema: {
    types: schemaTypes
  }
});
