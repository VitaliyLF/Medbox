export default {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo Image',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Navigation links',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Header link label',
              description: 'Enter link text',
            },
            {
              name: 'href',
              type: 'string',
              title: 'Header link href',
              description: 'Enter link path. ⚡️ This field is required.',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Button text',
      options: {
        list: [
          { title: 'Get started', value: 'Get started' },
          { title: 'Check My Coverage', value: 'Check My Coverage' },
          { title: 'Learn About Medbox', value: 'Learn About Medbox' },
          {
            title: 'Check Insurance Coverage',
            value: 'Check Insurance Coverage',
          },
          { title: 'Read More Reviews', value: 'Read More Reviews' },
          { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
          { title: 'See All Resources', value: 'See All Resources' },
        ],
      },
    },
    {
      name: 'btnTextMobile',
      type: 'string',
      title: 'Mobile Button text',
    },
  ],
}
