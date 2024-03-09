export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'headerLogo',
      type: 'image',
      title: 'Header logo Image',
    },
    {
      name: 'headerLinks',
      type: 'array',
      title: 'Header navigation links',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'headerLinksText',
              type: 'string',
              title: 'Header link text',
              description: 'Enter link text',
            },
          ],
        },
      ],
    },
  ],
}
