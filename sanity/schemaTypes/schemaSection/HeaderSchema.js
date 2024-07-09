export const HeaderSchema = (fields = {}) => {
  const {
    logoTitle = 'Logo Image',
    linkTitle = 'Navigation links',
    btnTextTitle = 'Button text',
    btnTextOptions = [
      { title: 'Get started', value: 'Get started' },
      { title: 'Check My Coverage', value: 'Check My Coverage' },
      { title: 'Learn About Medbox', value: 'Learn About Medbox' },
      { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
      { title: 'Read More Reviews', value: 'Read More Reviews' },
      { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
      { title: 'See All Resources', value: 'See All Resources' },
    ],
    btnTextMobileTitle = 'Mobile Button text',
  } = fields

  return {
    name: 'header',
    type: 'object',
    title: 'Header',
    fields: [
      {
        name: 'logo',
        type: 'image',
        title: logoTitle,
      },
      {
        name: 'links',
        type: 'array',
        title: linkTitle,
        of: [
          {
            type: 'document',
            fields: [
              {
                name: 'text',
                type: 'string',
                title: 'Header link text',
                description: 'Enter link text',
              },
              {
                name: 'href',
                type: 'string',
                title: 'Header link href',
                description: 'Enter link text',
              },
            ],
          },
        ],
      },
      {
        name: 'btnText',
        type: 'string',
        title: btnTextTitle,
        options: {
          list: btnTextOptions,
        },
      },
      {
        name: 'btnTextMobile',
        type: 'string',
        title: btnTextMobileTitle,
      },
    ],
  }
}
