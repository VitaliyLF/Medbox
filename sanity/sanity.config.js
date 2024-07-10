import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structureSanity } from '../src/app/lib/structureSanity'

export default defineConfig({
  name: 'default',
  title: 'Medbox',

  projectId: 'wuc0r56x',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: structureSanity,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
