import { HeaderSchema } from './schemaSection/HeaderSchema'

const header = HeaderSchema()

export default {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [header],
}
