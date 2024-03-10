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
    {
      name: 'headerBtnText',
      type: 'string',
      title: 'header Button text',
    },
    {
      name: 'headerMobileBtnText',
      type: 'string',
      title: 'header mobile Button text',
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero main Title',
    },
    {
      name: 'heroSlug',
      type: 'slug',
      title: 'Slug of homepage',
      options: {
        source: 'heroTitle',
      },
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero subTitle',
    },
    {
      name: 'heroText',
      type: 'text',
      title: 'Hero paragraph',
    },
    {
      name: 'heroBtnText',
      type: 'string',
      title: 'Hero button text',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Header Image',
    },
  ],
}
